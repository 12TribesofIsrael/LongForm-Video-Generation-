import React, { useState } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import ContentTypeSelector from './components/ContentTypeSelector';
import VoiceSettings from './components/VoiceSettings';
import VisualSettings from './components/VisualSettings';
import AdvancedSettings from './components/AdvancedSettings';
import GenerationControls from './components/GenerationControls';
import ProgressTracker from './components/ProgressTracker';

function App() {
  // Text input state
  const [text, setText] = useState('');
  const [autoProcess, setAutoProcess] = useState(true);
  
  // Content type state
  const [contentType, setContentType] = useState('black-hebrew');
  
  // Voice settings state
  const [voiceProvider, setVoiceProvider] = useState('elevenlabs');
  const [selectedVoice, setSelectedVoice] = useState('bella-premium');
  const [voiceSpeed, setVoiceSpeed] = useState(0.9);
  
  // Visual settings state
  const [imageQuality, setImageQuality] = useState('flux-pro');
  const [visualStyle, setVisualStyle] = useState('biblical-realism');
  const [captionSettings, setCaptionSettings] = useState({
    enabled: true,
    size: 80,
    color: '#FFD700'
  });
  
  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [generationError, setGenerationError] = useState<string | undefined>();

  const generationStages = [
    {
      id: 1,
      title: 'Processing Biblical Text',
      description: 'Analyzing and optimizing your biblical content with Perplexity AI',
      icon: '🔄'
    },
    {
      id: 2,
      title: 'Generating Scenes',
      description: 'Creating 20 optimized scene descriptions and visual narratives',
      icon: '🎭'
    },
    {
      id: 3,
      title: 'Creating Images',
      description: 'Generating high-quality biblical imagery with culturally authentic representation',
      icon: '🖼️'
    },
    {
      id: 4,
      title: 'Adding Narration',
      description: 'Synthesizing professional voice narration with ElevenLabs',
      icon: '🎵'
    },
    {
      id: 5,
      title: 'Finalizing Video',
      description: 'Combining all elements with JSON2Video and applying Ken Burns effects',
      icon: '🎬'
    },
    {
      id: 6,
      title: 'Complete!',
      description: 'Your professional biblical video is ready for download',
      icon: '✅'
    }
  ];

  const handleGenerate = () => {
    if (!text.trim()) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Create Professional Biblical Videos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform biblical text into high-quality videos with AI-generated visuals, 
              premium voice narration, and professional captions in just 11-15 minutes.
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

          {/* Text Input Section */}
          <TextInput
            text={text}
            setText={setText}
            autoProcess={autoProcess}
            setAutoProcess={setAutoProcess}
          />

          {/* Content Type Selection */}
          <ContentTypeSelector
            selectedType={contentType}
            setSelectedType={setContentType}
          />

          {/* Voice Settings */}
          <VoiceSettings
            provider={voiceProvider}
            setProvider={setVoiceProvider}
            selectedVoice={selectedVoice}
            setSelectedVoice={setSelectedVoice}
            speed={voiceSpeed}
            setSpeed={setVoiceSpeed}
          />

          {/* Visual Settings */}
          <VisualSettings
            imageQuality={imageQuality}
            setImageQuality={setImageQuality}
            visualStyle={visualStyle}
            setVisualStyle={setVisualStyle}
            captionSettings={captionSettings}
            setCaptionSettings={setCaptionSettings}
          />

          {/* Advanced Settings */}
          <AdvancedSettings />

          {/* Generation Controls */}
          <GenerationControls
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            text={text}
            contentType={contentType}
            voiceSettings={{
              provider: voiceProvider,
              voice: selectedVoice,
              speed: voiceSpeed
            }}
            visualSettings={{
              imageQuality: imageQuality,
              visualStyle: visualStyle,
              captionSettings: captionSettings
            }}
          />
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
}

export default App;