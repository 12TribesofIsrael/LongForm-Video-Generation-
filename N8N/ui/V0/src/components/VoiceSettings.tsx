import React, { useState } from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

interface VoiceSettingsProps {
  provider: string;
  setProvider: (provider: string) => void;
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
  speed: number;
  setSpeed: (speed: number) => void;
}

const VoiceSettings: React.FC<VoiceSettingsProps> = ({
  provider,
  setProvider,
  selectedVoice,
  setSelectedVoice,
  speed,
  setSpeed
}) => {
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);

  const voices = {
    azure: [
      { id: 'rachel-female', name: 'Rachel', gender: 'Female', style: 'Natural', quality: 'Standard' },
      { id: 'david-male', name: 'David', gender: 'Male', style: 'Authoritative', quality: 'Standard' },
      { id: 'sarah-female', name: 'Sarah', gender: 'Female', style: 'Warm', quality: 'Standard' }
    ],
    elevenlabs: [
      { id: 'bella-premium', name: 'Bella', gender: 'Female', style: 'Professional', quality: 'Premium ★★★★★' },
      { id: 'adam-premium', name: 'Adam', gender: 'Male', style: 'Deep', quality: 'Premium ★★★★★' },
      { id: 'antoni-premium', name: 'Antoni', gender: 'Male', style: 'Narrative', quality: 'Premium ★★★★★' }
    ]
  };

  const handleVoicePreview = (voiceId: string) => {
    if (playingVoice === voiceId) {
      setPlayingVoice(null);
    } else {
      setPlayingVoice(voiceId);
      // Simulate audio playback
      setTimeout(() => setPlayingVoice(null), 3000);
    }
  };

  const getSpeedLabel = (speed: number) => {
    if (speed < 0.8) return 'Slow';
    if (speed > 1.2) return 'Fast';
    return 'Normal Pace';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Volume2 className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Voice & Audio Settings</h3>
      </div>

      <div className="space-y-6">
        {/* Voice Provider Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Voice Provider</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setProvider('azure')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                provider === 'azure'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 ${
                provider === 'azure' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
              }`}>
                {provider === 'azure' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
              <span>Azure Neural</span>
            </button>
            
            <button
              onClick={() => setProvider('elevenlabs')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                provider === 'elevenlabs'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 ${
                provider === 'elevenlabs' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
              }`}>
                {provider === 'elevenlabs' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
              <span>ElevenLabs</span>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Premium</span>
            </button>
          </div>
        </div>

        {/* Voice Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Voice Selection</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {voices[provider as keyof typeof voices].map((voice) => (
              <div
                key={voice.id}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedVoice === voice.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedVoice(voice.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full border-2 ${
                      selectedVoice === voice.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {selectedVoice === voice.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{voice.name}</span>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVoicePreview(voice.id);
                    }}
                    className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {playingVoice === voice.id ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </button>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1">
                  <div>{voice.gender} • {voice.style}</div>
                  <div className="text-blue-600">{voice.quality}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speed Control */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Speech Speed: <span className="text-blue-600">{speed.toFixed(1)}x ({getSpeedLabel(speed)})</span>
          </label>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">0.5x</span>
            <div className="flex-1">
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <span className="text-sm text-gray-500">2.0x</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSettings;