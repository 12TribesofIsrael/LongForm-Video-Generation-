import React, { useState } from 'react';
import { Palette, Eye, Type } from 'lucide-react';

interface VisualSettingsProps {
  imageQuality: string;
  setImageQuality: (quality: string) => void;
  visualStyle: string;
  setVisualStyle: (style: string) => void;
  captionSettings: {
    enabled: boolean;
    size: number;
    color: string;
  };
  setCaptionSettings: (settings: any) => void;
}

const VisualSettings: React.FC<VisualSettingsProps> = ({
  imageQuality,
  setImageQuality,
  visualStyle,
  setVisualStyle,
  captionSettings,
  setCaptionSettings
}) => {
  const [showCaptionPreview, setShowCaptionPreview] = useState(false);

  const imageQualities = [
    { id: 'flux-pro', name: 'Flux Pro', rating: 5, cost: '$0.055/image', description: 'Highest quality, photorealistic' },
    { id: 'flux-dev', name: 'Flux Dev', rating: 4, cost: '$0.025/image', description: 'High quality, balanced' },
    { id: 'flux-schnell', name: 'Flux Schnell', rating: 3, cost: '$0.003/image', description: 'Fast generation, good quality' }
  ];

  const visualStyles = [
    { id: 'biblical-realism', name: 'Biblical Realism', preview: '🏛️' },
    { id: 'artistic-classical', name: 'Artistic Classical', preview: '🎨' },
    { id: 'modern-cinematic', name: 'Modern Cinematic', preview: '🎬' },
    { id: 'illustrated-warm', name: 'Illustrated Warm', preview: '✨' }
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Palette className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Visual & Style Settings</h3>
      </div>

      <div className="space-y-6">
        {/* 20-Scene Optimization Display */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
            🎬 20-Scene Optimization
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">20</div>
              <div className="text-xs text-blue-700">Scenes</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">11-15</div>
              <div className="text-xs text-purple-700">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">Auto</div>
              <div className="text-xs text-green-700">Optimized</div>
            </div>
          </div>
          <p className="text-sm text-blue-700">
            Automatic scene segmentation for 11-15 minute videos with culturally authentic Hebrew Israelite representation
          </p>
          <div className="mt-2 flex items-center space-x-4 text-xs text-blue-600">
            <span>• Ken Burns Effects</span>
            <span>• Dynamic Zoom</span>
            <span>• Smooth Transitions</span>
          </div>
        </div>

        {/* Image Quality Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Image Quality</label>
          <div className="space-y-2">
            {imageQualities.map((quality) => (
              <button
                key={quality.id}
                onClick={() => setImageQuality(quality.id)}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  imageQuality === quality.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      imageQuality === quality.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {imageQuality === quality.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{quality.name}</span>
                        <span className="text-yellow-500">{renderStars(quality.rating)}</span>
                      </div>
                      <p className="text-sm text-gray-600">{quality.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{quality.cost}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Style Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Visual Style</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {visualStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setVisualStyle(style.id)}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  visualStyle === style.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{style.preview}</div>
                <div className={`text-sm font-medium ${
                  visualStyle === style.id ? 'text-blue-700' : 'text-gray-700'
                }`}>
                  {style.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Caption Settings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">Captions</label>
            <button
              onClick={() => setShowCaptionPreview(!showCaptionPreview)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setCaptionSettings({
                  ...captionSettings,
                  enabled: !captionSettings.enabled
                })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  captionSettings.enabled ? 'bg-yellow-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    captionSettings.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-gray-700">Enable Captions</span>
            </div>

            {captionSettings.enabled && (
              <>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Size: {captionSettings.size}px
                  </label>
                  <input
                    type="range"
                    min="40"
                    max="120"
                    value={captionSettings.size}
                    onChange={(e) => setCaptionSettings({
                      ...captionSettings,
                      size: parseInt(e.target.value)
                    })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Caption Color</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={captionSettings.color}
                      onChange={(e) => setCaptionSettings({
                        ...captionSettings,
                        color: e.target.value
                      })}
                      className="w-12 h-8 rounded border border-gray-300 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">{captionSettings.color}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Caption Preview */}
          {showCaptionPreview && captionSettings.enabled && (
            <div className="mt-4 p-4 bg-gray-900 rounded-lg relative">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded flex items-end justify-center p-4">
                <div
                  className="text-center font-bold shadow-lg"
                  style={{
                    fontSize: `${captionSettings.size * 0.3}px`,
                    color: captionSettings.color,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  "For God so loved the world..."
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <Type className="h-4 w-4 text-white opacity-50" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualSettings;