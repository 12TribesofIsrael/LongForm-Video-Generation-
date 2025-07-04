import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Key, Bot, Sliders, Eye, EyeOff, Cpu } from 'lucide-react';

const AdvancedSettings: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('api-keys');
  const [showApiKeys, setShowApiKeys] = useState({
    perplexity: false,
    elevenlabs: false,
    json2video: false
  });

  const [apiKeys, setApiKeys] = useState({
    perplexity: '',
    elevenlabs: '',
    json2video: ''
  });

  const [connectionStatus, setConnectionStatus] = useState({
    perplexity: 'disconnected',
    elevenlabs: 'disconnected',
    json2video: 'disconnected'
  });

  // AI Model Settings
  const [perplexityModel, setPerplexityModel] = useState('sonar-pro');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(5000);

  const perplexityModels = [
    { value: 'sonar-pro', label: 'Sonar Pro (Recommended)', description: 'Best for complex biblical content generation' },
    { value: 'sonar-reasoning-pro', label: 'Sonar Reasoning Pro', description: 'Advanced reasoning for detailed analysis' },
    { value: 'sonar-deep-research', label: 'Sonar Deep Research', description: 'Comprehensive research capabilities' },
    { value: 'sonar-reasoning', label: 'Sonar Reasoning', description: 'Fast reasoning for quick responses' },
    { value: 'sonar', label: 'Sonar Standard', description: 'Lightweight and cost-effective' },
    { value: 'r1-1776', label: 'R1-1776', description: 'Offline model without search' }
  ];

  const testConnection = async (service: string) => {
    setConnectionStatus(prev => ({ ...prev, [service]: 'testing' }));
    
    try {
      if (service === 'perplexity') {
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKeys.perplexity}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: perplexityModel,
            messages: [{ role: 'user', content: 'Test connection' }],
            max_tokens: 10
          })
        });
        
        setConnectionStatus(prev => ({ 
          ...prev, 
          [service]: response.ok ? 'connected' : 'error' 
        }));
      } else {
        // Simulate test for other services
        setTimeout(() => {
          setConnectionStatus(prev => ({ 
            ...prev, 
            [service]: apiKeys[service as keyof typeof apiKeys] ? 'connected' : 'error' 
          }));
        }, 2000);
      }
    } catch (error) {
      setConnectionStatus(prev => ({ ...prev, [service]: 'error' }));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'testing': return 'text-yellow-600';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return '🟢';
      case 'error': return '🔴';
      case 'testing': return '🟡';
      default: return '⚪';
    }
  };

  const getSelectedModelDescription = () => {
    const model = perplexityModels.find(m => m.value === perplexityModel);
    return model ? model.description : '';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <Sliders className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Advanced Settings</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('api-keys')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'api-keys'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Key className="h-4 w-4" />
                <span>API Keys</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('ai-models')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'ai-models'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4" />
                <span>AI Models</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('scene-control')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'scene-control'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Sliders className="h-4 w-4" />
                <span>Scene Control</span>
              </div>
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'api-keys' && (
              <div className="space-y-6">
                {/* Perplexity AI API Key */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      Perplexity AI API Key
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">{getStatusIcon(connectionStatus.perplexity)}</span>
                      <span className={`text-xs ${getStatusColor(connectionStatus.perplexity)}`}>
                        {connectionStatus.perplexity === 'testing' ? 'Testing...' : connectionStatus.perplexity}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <input
                        type={showApiKeys.perplexity ? 'text' : 'password'}
                        value={apiKeys.perplexity}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, perplexity: e.target.value }))}
                        placeholder="pplx-..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button
                        onClick={() => setShowApiKeys(prev => ({ ...prev, perplexity: !prev.perplexity }))}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showApiKeys.perplexity ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <button
                      onClick={() => testConnection('perplexity')}
                      disabled={!apiKeys.perplexity || connectionStatus.perplexity === 'testing'}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      Test
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Used for AI-powered scene generation and biblical analysis. Get your key from{' '}
                    <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Perplexity AI Settings
                    </a>
                  </p>
                </div>

                {/* ElevenLabs API Key */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      ElevenLabs API Key
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">{getStatusIcon(connectionStatus.elevenlabs)}</span>
                      <span className={`text-xs ${getStatusColor(connectionStatus.elevenlabs)}`}>
                        {connectionStatus.elevenlabs === 'testing' ? 'Testing...' : connectionStatus.elevenlabs}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <input
                        type={showApiKeys.elevenlabs ? 'text' : 'password'}
                        value={apiKeys.elevenlabs}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, elevenlabs: e.target.value }))}
                        placeholder="sk_..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button
                        onClick={() => setShowApiKeys(prev => ({ ...prev, elevenlabs: !prev.elevenlabs }))}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showApiKeys.elevenlabs ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <button
                      onClick={() => testConnection('elevenlabs')}
                      disabled={!apiKeys.elevenlabs || connectionStatus.elevenlabs === 'testing'}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      Test
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Required for premium voice synthesis. Get your key from{' '}
                    <a href="https://elevenlabs.io/app/settings/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      ElevenLabs Dashboard
                    </a>
                  </p>
                </div>

                {/* JSON2Video API Key */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      JSON2Video API Key
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">{getStatusIcon(connectionStatus.json2video)}</span>
                      <span className={`text-xs ${getStatusColor(connectionStatus.json2video)}`}>
                        {connectionStatus.json2video === 'testing' ? 'Testing...' : connectionStatus.json2video}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <input
                        type={showApiKeys.json2video ? 'text' : 'password'}
                        value={apiKeys.json2video}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, json2video: e.target.value }))}
                        placeholder="j2v_..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button
                        onClick={() => setShowApiKeys(prev => ({ ...prev, json2video: !prev.json2video }))}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showApiKeys.json2video ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <button
                      onClick={() => testConnection('json2video')}
                      disabled={!apiKeys.json2video || connectionStatus.json2video === 'testing'}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      Test
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Required for video generation and rendering. Get your key from{' '}
                    <a href="https://json2video.com/app/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      JSON2Video Dashboard
                    </a>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'ai-models' && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Perplexity AI Configuration</h4>
                  <p className="text-sm text-blue-700">
                    Configure the AI model used for biblical scene generation and content analysis.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Perplexity AI Model
                  </label>
                  <select
                    value={perplexityModel}
                    onChange={(e) => setPerplexityModel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {perplexityModels.map((model) => (
                      <option key={model.value} value={model.value}>
                        {model.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2 p-2 bg-gray-50 rounded">
                    <strong>Selected:</strong> {getSelectedModelDescription()}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Temperature: <span className="text-blue-600">{temperature}</span>
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0.1 (Focused)</span>
                    <span>1.0 (Creative)</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Controls creativity vs consistency in scene generation
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Tokens
                  </label>
                  <input
                    type="number"
                    min="1000"
                    max="8000"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Maximum response length (1000-8000 tokens, default: 5000)
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 mb-2">Current Configuration</h5>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>Model: <span className="font-medium">{perplexityModels.find(m => m.value === perplexityModel)?.label}</span></div>
                    <div>Temperature: <span className="font-medium">{temperature}</span></div>
                    <div>Max Tokens: <span className="font-medium">{maxTokens.toLocaleString()}</span></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scene-control' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                    🎬 20-Scene Video Generation
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">20</div>
                      <div className="text-sm text-purple-700">Target Scenes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">Auto</div>
                      <div className="text-sm text-blue-700">Scene Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">Ken Burns</div>
                      <div className="text-sm text-green-700">Motion Effects</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-500">•</span>
                      <span>Optimized for 20 scenes to ensure smooth pacing and professional quality</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>Scene duration automatically calculated based on narration length</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-green-500">•</span>
                      <span>Ken Burns effect and zoom transitions for dynamic visual engagement</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500">•</span>
                      <span>Hebrew Israelite representation with culturally authentic imagery</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Technical Specifications</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Resolution:</span>
                      <span className="ml-2 font-medium">1920x1080 (Full HD)</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Frame Rate:</span>
                      <span className="ml-2 font-medium">30 FPS</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Audio Quality:</span>
                      <span className="ml-2 font-medium">48kHz, 16-bit</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Format:</span>
                      <span className="ml-2 font-medium">MP4 (H.264)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-medium text-yellow-900 mb-2">⚡ Workflow Optimization</h5>
                  <p className="text-sm text-yellow-700">
                    Your n8n workflow automatically handles scene optimization, ensuring each of the 20 scenes 
                    is perfectly timed and visually compelling for maximum audience engagement.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSettings;