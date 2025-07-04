import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface ProgressTrackerProps {
  isVisible: boolean;
  currentStage: number;
  stages: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
  }>;
  error?: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  isVisible, 
  currentStage, 
  stages, 
  error 
}) => {
  if (!isVisible) return null;

  const getStageStatus = (stageId: number) => {
    if (error && stageId === currentStage) return 'error';
    if (stageId < currentStage) return 'completed';
    if (stageId === currentStage) return 'active';
    return 'pending';
  };

  const getStageIcon = (stage: any, status: string) => {
    if (status === 'completed') return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (status === 'error') return <AlertCircle className="h-5 w-5 text-red-600" />;
    if (status === 'active') return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />;
    return <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>;
  };

  const getStageColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'active': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-400 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {error ? 'Generation Error' : 'Generating Your Biblical Video'}
          </h2>
          <p className="text-gray-600">
            {error ? 'An error occurred during generation' : 'Please wait while we create your professional biblical video...'}
          </p>
        </div>

        <div className="space-y-4">
          {stages.map((stage, index) => {
            const status = getStageStatus(stage.id);
            const isLast = index === stages.length - 1;
            
            return (
              <div key={stage.id} className="relative">
                <div className={`flex items-center p-4 rounded-lg border-2 transition-all ${getStageColor(status)}`}>
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      {getStageIcon(stage, status)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{stage.icon}</span>
                        <h3 className="font-semibold">{stage.title}</h3>
                      </div>
                      <p className="text-sm opacity-75 mt-1">{stage.description}</p>
                    </div>
                    
                    {status === 'active' && (
                      <div className="flex-shrink-0">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {!isLast && (
                  <div className={`w-0.5 h-4 ml-6 mt-2 ${
                    status === 'completed' ? 'bg-green-300' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            );
          })}
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800">Error Details</h4>
                <p className="text-sm text-red-700 mt-1">{error}</p>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-3">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Retry Generation
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}

        {!error && currentStage < stages.length && (
          <div className="mt-6 text-center">
            <div className="text-sm text-gray-600 mb-2">
              Estimated time remaining: {Math.max(0, (stages.length - currentStage) * 2)} minutes
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStage / stages.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;