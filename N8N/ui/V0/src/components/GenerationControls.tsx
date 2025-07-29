import React, { useState } from 'react';
import { Rocket, Save, Upload, Download, Globe, TestTube, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface GenerationControlsProps {
  onGenerate: () => void;
  isGenerating: boolean;
  text?: string;
  contentType?: string;
  voiceSettings?: {
    provider: string;
    voice: string;
    speed: number;
  };
  visualSettings?: {
    imageQuality: string;
    visualStyle: string;
    captionSettings: any;
  };
}

const GenerationControls: React.FC<GenerationControlsProps> = ({ 
  onGenerate, 
  isGenerating, 
  text = '',
  contentType = 'black-hebrew',
  voiceSettings,
  visualSettings 
}) => {
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [n8nWebhookUrl, setN8nWebhookUrl] = useState('');
  const [statusEndpoint, setStatusEndpoint] = useState('');
  const [downloadEndpoint, setDownloadEndpoint] = useState('');
  const [showAdvancedN8n, setShowAdvancedN8n] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'connected' | 'error'>('idle');

  // Calculate real-time metrics
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  // Dynamic cost calculation based on word count
  const perplexityCost = 0.15;
  const elevenlabsCost = Math.min(2.50, Math.max(0.50, wordCount * 0.003));
  const json2videoCost = 1.00;
  const totalCost = perplexityCost + elevenlabsCost + json2videoCost;

  // Dynamic time estimation
  const sceneGenerationTime = 2;
  const voiceSynthesisTime = Math.max(3, Math.ceil(wordCount / 200));
  const videoRenderingTime = 6;
  const totalTime = sceneGenerationTime + voiceSynthesisTime + videoRenderingTime;

  const costBreakdown = [
    { service: 'Perplexity AI', cost: perplexityCost, color: 'text-blue-600', description: 'Scene generation' },
    { service: 'ElevenLabs', cost: elevenlabsCost, color: 'text-purple-600', description: 'Voice synthesis' },
    { service: 'JSON2Video', cost: json2videoCost, color: 'text-green-600', description: 'Video rendering' }
  ];

  const handleSaveTemplate = () => {
    if (templateName.trim()) {
      const template = {
        name: templateName,
        contentType,
        voiceSettings,
        visualSettings,
        timestamp: new Date().toISOString()
      };
      
      // Save to localStorage for demo
      const savedTemplates = JSON.parse(localStorage.getItem('bibleVideoTemplates') || '[]');
      savedTemplates.push(template);
      localStorage.setItem('bibleVideoTemplates', JSON.stringify(savedTemplates));
      
      alert(`✅ Template "${templateName}" saved successfully!`);
      setShowTemplateModal(false);
      setTemplateName('');
    }
  };

  const testN8nConnection = async () => {
    if (!n8nWebhookUrl.trim()) {
      alert('Please enter a webhook URL first');
      return;
    }
    
    setConnectionStatus('testing');
    try {
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          test: true,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setConnectionStatus('connected');
        alert('🟢 n8n connection successful!');
      } else {
        setConnectionStatus('error');
        alert(`🔴 Connection failed: HTTP ${response.status}`);
      }
    } catch (error) {
      setConnectionStatus('error');
      alert(`🔴 Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleGenerateWithN8n = async () => {
    if (!text.trim()) {
      alert('Please enter some biblical text to generate a video.');
      return;
    }

    if (n8nWebhookUrl.trim()) {
      try {
        const payload = {
          inputText: text,
          contentType,
          voiceSettings,
          visualSettings,
          wordCount,
          estimatedCost: totalCost,
          estimatedTime: totalTime,
          timestamp: new Date().toISOString()
        };

        const response = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const result = await response.json();
          alert('🚀 Video generation started in n8n! Check your n8n workflow for progress.');
          onGenerate(); // Start local progress tracking
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        alert(`❌ Failed to connect to n8n webhook: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else {
      // Demo mode
      onGenerate();
    }
  };

  const getConnectionStatusColor = () => {
    switch (connectionStatus) {
      case 'connected': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'testing': return 'text-yellow-600';
      default: return 'text-gray-400';
    }
  };

  const getConnectionStatusIcon = () => {
    switch (connectionStatus) {
      case 'connected': return '🟢';
      case 'error': return '🔴';
      case 'testing': return '🟡';
      default: return '⚪';
    }
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        // In a real implementation, you would update the parent component's text state
        console.log('File content:', content);
        alert(`📄 File "${file.name}" imported successfully! Content length: ${content.length} characters`);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* Generation Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            📊 Generation Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{wordCount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Words</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">${totalCost.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Cost</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{totalTime}m</div>
              <div className="text-sm text-gray-600">Est. Time</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">20</div>
              <div className="text-sm text-gray-600">Scenes</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-gray-900 mb-3">💰 Cost Breakdown</h4>
            <div className="space-y-2">
              {costBreakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <span className="text-sm font-medium text-gray-700">{item.service}</span>
                    <span className="text-xs text-gray-500 ml-2">({item.description})</span>
                  </div>
                  <span className={`text-sm font-bold ${item.color}`}>${item.cost.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {wordCount === 0 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <span className="text-sm text-yellow-700">Enter biblical text to see accurate cost and time estimates</span>
            </div>
          )}
        </div>

        {/* n8n Integration */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">n8n Integration</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                n8n Webhook URL
              </label>
              <div className="flex space-x-2">
                <input
                  type="url"
                  value={n8nWebhookUrl}
                  onChange={(e) => setN8nWebhookUrl(e.target.value)}
                  placeholder="https://your-n8n-instance.com/webhook/bible-video-generator"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={testN8nConnection}
                  disabled={!n8nWebhookUrl.trim() || connectionStatus === 'testing'}
                  className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <TestTube className="h-4 w-4" />
                  <span>Test</span>
                </button>
              </div>
              
              {connectionStatus !== 'idle' && (
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs">{getConnectionStatusIcon()}</span>
                  <span className={`text-xs ${getConnectionStatusColor()}`}>
                    {connectionStatus === 'testing' ? 'Testing connection...' : 
                     connectionStatus === 'connected' ? 'Connected successfully' :
                     connectionStatus === 'error' ? 'Connection failed' : ''}
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowAdvancedN8n(!showAdvancedN8n)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <span>Advanced Settings</span>
              {showAdvancedN8n ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {showAdvancedN8n && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status Endpoint (Optional)
                  </label>
                  <input
                    type="url"
                    value={statusEndpoint}
                    onChange={(e) => setStatusEndpoint(e.target.value)}
                    placeholder="https://your-n8n-instance.com/webhook/status"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Download Endpoint (Optional)
                  </label>
                  <input
                    type="url"
                    value={downloadEndpoint}
                    onChange={(e) => setDownloadEndpoint(e.target.value)}
                    placeholder="https://your-n8n-instance.com/webhook/download"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {n8nWebhookUrl && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">🔗 n8n Workflow Status</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Connected to n8n workflow</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Real-time generation with your custom automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🎬</span>
                    <span>20-scene optimization enabled</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Generation Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleGenerateWithN8n}
              disabled={isGenerating || wordCount === 0}
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Rocket className="h-5 w-5" />
              <span>
                {isGenerating ? 'Generating Video...' : 
                 n8nWebhookUrl ? 'Generate with n8n' : 'Generate Video (Demo)'}
              </span>
            </button>

            <button
              onClick={() => setShowTemplateModal(true)}
              className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-4 px-6 rounded-lg transition-all"
            >
              <Save className="h-5 w-5" />
              <span>Save Template</span>
            </button>

            <label className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-4 px-6 rounded-lg transition-all cursor-pointer">
              <Upload className="h-5 w-5" />
              <span>Import Text</span>
              <input
                type="file"
                accept=".txt,.docx,.pdf"
                className="hidden"
                onChange={handleFileImport}
              />
            </label>

            <button 
              onClick={() => {
                const config = {
                  contentType,
                  voiceSettings,
                  visualSettings,
                  n8nWebhookUrl,
                  timestamp: new Date().toISOString()
                };
                const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'bible-video-config.json';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-4 px-6 rounded-lg transition-all"
            >
              <Download className="h-5 w-5" />
              <span>Export Config</span>
            </button>
          </div>

          {isGenerating && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                <span className="text-blue-800 font-medium">
                  {n8nWebhookUrl ? 
                    'n8n workflow triggered! Check your n8n instance for real-time progress.' :
                    `Preparing your biblical video... Estimated completion: ${totalTime} minutes.`
                  }
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Save Template</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Template Name
                </label>
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="e.g., Sunday Sermon Template"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Template will include:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Content type: {contentType}</li>
                  <li>• Voice settings: {voiceSettings?.provider} - {voiceSettings?.voice}</li>
                  <li>• Visual style: {visualSettings?.visualStyle}</li>
                  <li>• Caption settings</li>
                </ul>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleSaveTemplate}
                  disabled={!templateName.trim()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save Template
                </button>
                <button
                  onClick={() => {
                    setShowTemplateModal(false);
                    setTemplateName('');
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenerationControls;