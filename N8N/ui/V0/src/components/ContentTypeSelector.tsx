import React from 'react';
import { Book, Users, Scale } from 'lucide-react';

interface ContentTypeSelectorProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({ selectedType, setSelectedType }) => {
  const contentTypes = [
    {
      id: 'general',
      title: 'General Biblical Content',
      description: 'Standard biblical presentation for all audiences',
      icon: Book,
      color: 'blue'
    },
    {
      id: 'black-hebrew',
      title: 'Black Hebrew Israelite',
      description: 'Culturally authentic representation with melanated imagery',
      icon: Users,
      color: 'purple'
    },
    {
      id: 'scale',
      title: 'Scale/General',
      description: 'Non-biblical content for general video creation',
      icon: Scale,
      color: 'green'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Type</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contentTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`relative p-4 rounded-lg border-2 transition-all text-left ${
                isSelected
                  ? `border-${type.color}-500 bg-${type.color}-50`
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  isSelected ? `bg-${type.color}-100` : 'bg-gray-100'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    isSelected ? `text-${type.color}-600` : 'text-gray-600'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      isSelected
                        ? `border-${type.color}-500 bg-${type.color}-500`
                        : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <h4 className={`font-medium ${
                      isSelected ? `text-${type.color}-900` : 'text-gray-900'
                    }`}>
                      {type.title}
                    </h4>
                  </div>
                  <p className={`text-sm mt-1 ${
                    isSelected ? `text-${type.color}-700` : 'text-gray-600'
                  }`}>
                    {type.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTypeSelector;