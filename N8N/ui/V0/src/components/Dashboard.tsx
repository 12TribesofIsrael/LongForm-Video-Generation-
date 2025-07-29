import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Settings, Download, Play, Clock, CreditCard, FileText, Volume2, Palette, Zap, Save, Upload, Eye, EyeOff } from 'lucide-react';
import EnhancedTextInput from './EnhancedTextInput';
import ContentTypeSelector from './ContentTypeSelector';
import VoiceSettings from './VoiceSettings';
import VisualSettings from './VisualSettings';
import AdvancedSettings from './AdvancedSettings';
import GenerationControls from './GenerationControls';
import ProgressTracker from './ProgressTracker';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  
  // Text input state with processing
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState('');
  const [autoProcess, setAutoProcess] = useState(true);
  const [processingMetrics, setProcessingMetrics] = useState({
    originalWordCount: 0,
    processedWordCount: 0,
    expectedMinutes: 0,
    expectedScenes: 0,
    truncationStatus: '',
    processingStatus: ''
  });
  
  // Content type state
  const [contentType, setContentType] = useState('black-hebrew');
  
  // Voice settings state
  const [voiceProvider, setVoiceProvider] = useState('elevenlabs');
  const [selectedVoice, setSelectedVoice] = useState('bella-premium');
  const [voiceSpeed, setVoiceSpeed] = useState(0.9);
  const [voiceStability, setVoiceStability] = useState(0.5);
  const [voiceSimilarity, setVoiceSimilarity] = useState(0.75);
  
  // Visual settings state
  const [imageQuality, setImageQuality] = useState('flux-pro');
  const [visualStyle, setVisualStyle] = useState('biblical-realism');
  const [captionSettings, setCaptionSettings] = useState({
    enabled: true,
    size: 80,
    color: '#FFD700',
    font: 'serif',
    outline: true
  });
  
  // Advanced settings state
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [apiKeys, setApiKeys] = useState({
    perplexity: '',
    elevenlabs: '',
    json2video: ''
  });
  const [customPrompts, setCustomPrompts] = useState('');
  const [sceneControl, setSceneControl] = useState({
    minScenes: 15,
    maxScenes: 25,
    sceneDuration: 3
  });
  
  // Template management
  interface Template {
    id: number;
    name: string;
    settings: {
      contentType: string;
      voiceProvider: string;
      selectedVoice: string;
      voiceSpeed: number;
      voiceStability: number;
      voiceSimilarity: number;
      imageQuality: string;
      visualStyle: string;
      captionSettings: {
        enabled: boolean;
        size: number;
        color: string;
        font: string;
        outline: boolean;
      };
      sceneControl: {
        minScenes: number;
        maxScenes: number;
        sceneDuration: number;
      };
    };
    createdAt: string;
  }
  
  const [templates, setTemplates] = useState<Template[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState<Template | null>(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  
  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [generationError, setGenerationError] = useState<string | undefined>();

  const generationStages = [
    {
      id: 1,
      title: 'Processing Biblical Text',
      description: 'Analyzing and optimizing your biblical content with Perplexity AI',
      icon: '🔄',
      estimatedTime: '2-3 minutes'
    },
    {
      id: 2,
      title: 'Generating Scenes',
      description: 'Creating 20 optimized scene descriptions and visual narratives',
      icon: '🎭',
      estimatedTime: '3-4 minutes'
    },
    {
      id: 3,
      title: 'Creating Images',
      description: 'Generating high-quality biblical imagery with culturally authentic representation',
      icon: '🖼️',
      estimatedTime: '4-5 minutes'
    },
    {
      id: 4,
      title: 'Adding Narration',
      description: 'Synthesizing professional voice narration with ElevenLabs',
      icon: '🎵',
      estimatedTime: '2-3 minutes'
    },
    {
      id: 5,
      title: 'Finalizing Video',
      description: 'Combining all elements with JSON2Video and applying Ken Burns effects',
      icon: '🎬',
      estimatedTime: '1-2 minutes'
    },
    {
      id: 6,
      title: 'Complete!',
      description: 'Your professional biblical video is ready for download',
      icon: '✅',
      estimatedTime: 'Ready'
    }
  ];

  // Text processing functions
  const processText = (rawText: string) => {
    if (!rawText.trim()) return;
    
    // Clean text (remove verse numbers, references)
    let cleaned = rawText
      .replace(/\d+:\d+/g, '') // Remove verse references
      .replace(/\[.*?\]/g, '') // Remove brackets
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    
    // Count words
    const wordCount = cleaned.split(/\s+/).length;
    
    // Limit to 1000 words (smart truncation)
    let processed = cleaned;
    let truncated = false;
    
    if (wordCount > 1000) {
      const words = cleaned.split(/\s+/);
      processed = words.slice(0, 1000).join(' ');
      truncated = true;
    }
    
    // Calculate metrics
    const processedWordCount = processed.split(/\s+/).length;
    const expectedMinutes = Math.round((processedWordCount / 150) * 10) / 10; // 150 WPM
    const expectedScenes = Math.ceil(processedWordCount / 40); // 40 words per scene
    
    setProcessedText(processed);
    setProcessingMetrics({
      originalWordCount: wordCount,
      processedWordCount,
      expectedMinutes,
      expectedScenes,
      truncationStatus: truncated ? 'Truncated' : 'Complete',
      processingStatus: processedWordCount >= 50 ? '✅ Optimized' : '⚠️ Too Short'
    });
  };

  // Auto-process text when it changes
  useEffect(() => {
    if (autoProcess && text) {
      const timeoutId = setTimeout(() => {
        processText(text);
      }, 500); // Debounce processing
      
      return () => clearTimeout(timeoutId);
    }
  }, [text, autoProcess]);

  const handleGenerate = () => {
    if (!processedText.trim()) {
      alert('Please enter some biblical text to generate a video.');
      return;
    }

    setIsGenerating(true);
    setCurrentStage(1);
    setGenerationError(undefined);

    // Simulate the generation process
    const simulateStage = (stage: number) => {
      setTimeout(() => {
        if (stage <= generationStages.length) {
          setCurrentStage(stage);
          if (stage < generationStages.length) {
            simulateStage(stage + 1);
          } else {
            // Generation complete
            setTimeout(() => {
              setIsGenerating(false);
              alert('🎉 Your biblical video has been generated successfully! In a real implementation, the download would start automatically.');
            }, 1000);
          }
        }
      }, Math.random() * 3000 + 2000); // Random delay between 2-5 seconds per stage
    };

    simulateStage(1);
  };

  const saveTemplate = () => {
    const template = {
      id: Date.now(),
      name: `Template ${templates.length + 1}`,
      settings: {
        contentType,
        voiceProvider,
        selectedVoice,
        voiceSpeed,
        voiceStability,
        voiceSimilarity,
        imageQuality,
        visualStyle,
        captionSettings,
        sceneControl
      },
      createdAt: new Date().toISOString()
    };
    
    setTemplates([...templates, template]);
    alert('Template saved successfully!');
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎬</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">BibleVideoAI Dashboard</h1>
                <p className="text-xs text-gray-500">Welcome back, {user?.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CreditCard className="h-4 w-4" />
                <span>{user?.credits} credits</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button 
                onClick={logout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Videos Created</p>
                  <p className="text-2xl font-bold text-gray-900">{user?.videosGenerated || 0}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Credits Remaining</p>
                  <p className="text-2xl font-bold text-gray-900">{user?.credits || 0}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Plan</p>
                  <p className="text-2xl font-bold text-gray-900 capitalize">{user?.plan || 'Free'}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Cost per Video</p>
                  <p className="text-2xl font-bold text-gray-900">$1.27</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Create Professional Biblical Videos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform biblical text into high-quality videos with AI-generated visuals, 
              premium voice narration, and professional captions in just 8-13 minutes.
            </p>
            <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <span className="text-blue-600">🤖</span>
                <span>Perplexity AI</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-purple-600">🎵</span>
                <span>ElevenLabs</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-600">🎬</span>
                <span>JSON2Video</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-orange-600">⚡</span>
                <span>n8n Integration</span>
              </div>
            </div>
          </div>

          {/* Enhanced Text Input Section */}
          <EnhancedTextInput
            text={text}
            setText={setText}
            processedText={processedText}
            setProcessedText={setProcessedText}
            autoProcess={autoProcess}
            setAutoProcess={setAutoProcess}
            processingMetrics={processingMetrics}
            setProcessingMetrics={setProcessingMetrics}
          />

          {/* Content Type Selection */}
          <ContentTypeSelector
            selectedType={contentType}
            setSelectedType={setContentType}
          />

          {/* Enhanced Voice Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">🎵 Voice & Audio Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Voice Provider</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="azure"
                      checked={voiceProvider === 'azure'}
                      onChange={(e) => setVoiceProvider(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Azure Neural</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="elevenlabs"
                      checked={voiceProvider === 'elevenlabs'}
                      onChange={(e) => setVoiceProvider(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">ElevenLabs (Premium)</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Voice Selection</label>
                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="bella-premium">Bella (Female, Soft) - Premium</option>
                  <option value="rachel-natural">Rachel (Female, Natural)</option>
                  <option value="domi-strong">Domi (Female, Strong)</option>
                  <option value="antoni-well-rounded">Antoni (Male, Well-rounded)</option>
                  <option value="arnold-crisp">Arnold (Male, Crisp)</option>
                </select>
                <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                  <Volume2 className="h-4 w-4" />
                  <span>🔊 Preview</span>
                </button>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Speed</label>
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={voiceSpeed}
                  onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 mt-1">{voiceSpeed} (Normal Pace)</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stability</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={voiceStability}
                  onChange={(e) => setVoiceStability(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 mt-1">{voiceStability}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Similarity</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={voiceSimilarity}
                  onChange={(e) => setVoiceSimilarity(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 mt-1">{voiceSimilarity}</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">🎨 Visual & Style Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image Quality</label>
                <select
                  value={imageQuality}
                  onChange={(e) => setImageQuality(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="flux-pro">Flux Pro ★★★★★ ($0.15/image)</option>
                  <option value="flux-standard">Flux Standard ★★★★☆ ($0.10/image)</option>
                  <option value="flux-basic">Flux Basic ★★★☆☆ ($0.05/image)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visual Style</label>
                <select
                  value={visualStyle}
                  onChange={(e) => setVisualStyle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="biblical-realism">Biblical Realism</option>
                  <option value="artistic-impression">Artistic Impression</option>
                  <option value="modern-minimal">Modern Minimal</option>
                  <option value="classical-painting">Classical Painting</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Caption Settings</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={captionSettings.enabled}
                    onChange={(e) => setCaptionSettings({...captionSettings, enabled: e.target.checked})}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Enable Captions</span>
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Size</label>
                  <input
                    type="range"
                    min="40"
                    max="120"
                    value={captionSettings.size}
                    onChange={(e) => setCaptionSettings({...captionSettings, size: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-500 mt-1">{captionSettings.size}px</div>
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Color</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={captionSettings.color}
                      onChange={(e) => setCaptionSettings({...captionSettings, color: e.target.value})}
                      className="w-8 h-8 rounded border border-gray-300"
                    />
                    <span className="text-sm text-gray-700">🟡 Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">⚙️ Advanced Settings</h2>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1"
              >
                {showAdvanced ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{showAdvanced ? 'Hide' : 'Show'} Advanced</span>
              </button>
            </div>
            
            {showAdvanced && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium text-gray-700 mb-3">🔐 API Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Perplexity API Key</label>
                      <input
                        type="password"
                        value={apiKeys.perplexity}
                        onChange={(e) => setApiKeys({...apiKeys, perplexity: e.target.value})}
                        placeholder="pplx-..."
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">ElevenLabs API Key</label>
                      <input
                        type="password"
                        value={apiKeys.elevenlabs}
                        onChange={(e) => setApiKeys({...apiKeys, elevenlabs: e.target.value})}
                        placeholder="..."
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">JSON2Video API Key</label>
                      <input
                        type="password"
                        value={apiKeys.json2video}
                        onChange={(e) => setApiKeys({...apiKeys, json2video: e.target.value})}
                        placeholder="..."
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-medium text-gray-700 mb-3">🎛️ Scene Control</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Min Scenes</label>
                      <input
                        type="number"
                        min="10"
                        max="30"
                        value={sceneControl.minScenes}
                        onChange={(e) => setSceneControl({...sceneControl, minScenes: parseInt(e.target.value)})}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Max Scenes</label>
                      <input
                        type="number"
                        min="15"
                        max="40"
                        value={sceneControl.maxScenes}
                        onChange={(e) => setSceneControl({...sceneControl, maxScenes: parseInt(e.target.value)})}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Scene Duration (sec)</label>
                      <input
                        type="number"
                        min="2"
                        max="8"
                        step="0.5"
                        value={sceneControl.sceneDuration}
                        onChange={(e) => setSceneControl({...sceneControl, sceneDuration: parseFloat(e.target.value)})}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Template Management */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">💾 Template Management</h2>
              <div className="flex space-x-2">
                <button
                  onClick={saveTemplate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Template</span>
                </button>
                <button
                  onClick={() => setShowTemplateModal(true)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1"
                >
                  <Upload className="h-4 w-4" />
                  <span>Load Template</span>
                </button>
              </div>
            </div>
            
            {templates.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900">{template.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(template.createdAt).toLocaleDateString()}
                    </p>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">Load</button>
                      <button className="text-sm text-red-600 hover:text-red-700">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Generation Controls */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">🚀 Video Generation</h2>
              <div className="text-sm text-gray-500">
                Estimated Cost: $1.27 | Credits: {user?.credits || 0}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !processedText.trim()}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>{isGenerating ? 'Generating...' : 'Generate Video'}</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Progress Tracker Modal */}
      <ProgressTracker
        isVisible={isGenerating}
        currentStage={currentStage}
        stages={generationStages}
        error={generationError}
      />
    </div>
  );
};

export default Dashboard; 