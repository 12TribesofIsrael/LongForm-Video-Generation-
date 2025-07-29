import React from 'react';
import { X, CheckCircle, Clock, AlertCircle, Play, Pause, RotateCcw } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  description: string;
  icon: string;
  estimatedTime?: string;
}

interface ProgressTrackerProps {
  isVisible: boolean;
  currentStage: number;
  stages: Stage[];
  error?: string;
  onClose?: () => void;
  onRetry?: () => void;
  onCancel?: () => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  isVisible,
  currentStage,
  stages,
  error,
  onClose,
  onRetry,
  onCancel
}) => {
  if (!isVisible) return null;

  const getStageStatus = (stageId: number) => {
    if (error && stageId === currentStage) return 'error';
    if (stageId < currentStage) return 'completed';
    if (stageId === currentStage) return 'active';
    return 'pending';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'active':
        return <div className="h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      default:
        return <Clock className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'active':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const calculateProgress = () => {
    if (error) return (currentStage - 1) / stages.length * 100;
    return currentStage / stages.length * 100;
  };

  const getCurrentStageInfo = () => {
    const stage = stages.find(s => s.id === currentStage);
    return stage || stages[0];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🎬</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Video Generation Progress</h2>
              <p className="text-sm text-gray-500">Creating your professional biblical video</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm text-gray-500">{Math.round(calculateProgress())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>

        {/* Current Stage Info */}
        <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{getCurrentStageInfo().icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900">{getCurrentStageInfo().title}</h3>
              <p className="text-sm text-blue-700">{getCurrentStageInfo().description}</p>
            </div>
            {getCurrentStageInfo().estimatedTime && (
              <div className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                ⏱️ {getCurrentStageInfo().estimatedTime}
              </div>
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="px-6 py-4 bg-red-50 border-b border-red-200">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900">Generation Error</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stages List */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {stages.map((stage) => {
              const status = getStageStatus(stage.id);
              return (
                <div
                  key={stage.id}
                  className={`flex items-start space-x-4 p-4 rounded-lg border transition-all ${
                    status === 'active' ? 'ring-2 ring-blue-500' : ''
                  } ${getStatusColor(status)}`}
                >
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{stage.title}</h4>
                      {stage.estimatedTime && (
                        <span className="text-sm text-gray-500 flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{stage.estimatedTime}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
                    
                    {/* Stage-specific details */}
                    {status === 'active' && (
                      <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-700">Processing...</span>
                          <div className="flex space-x-2">
                            <button
                              onClick={onCancel}
                              className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                            >
                              <Pause className="h-3 w-3" />
                              <span>Pause</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {status === 'error' && (
                      <div className="mt-3 p-3 bg-red-100 rounded-lg">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-red-700">Failed to complete</span>
                          <button
                            onClick={onRetry}
                            className="text-red-600 hover:text-red-700 flex items-center space-x-1"
                          >
                            <RotateCcw className="h-3 w-3" />
                            <span>Retry</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {error ? (
                <span>Generation failed. Please check your settings and try again.</span>
              ) : currentStage > stages.length ? (
                <span>✅ Video generation completed successfully!</span>
              ) : (
                <span>Processing stage {currentStage} of {stages.length}</span>
              )}
            </div>
            
            <div className="flex space-x-3">
              {error && (
                <>
                  <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Retry</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </>
              )}
              
              {!error && currentStage <= stages.length && (
                <button
                  onClick={onCancel}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <Pause className="h-4 w-4" />
                  <span>Cancel</span>
                </button>
              )}
              
              {!error && currentStage > stages.length && (
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Download Video</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;