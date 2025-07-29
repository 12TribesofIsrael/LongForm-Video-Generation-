import React, { useState, useEffect } from 'react';
import { FileText, RotateCcw, Settings, Clipboard } from 'lucide-react';

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  autoProcess: boolean;
  setAutoProcess: (value: boolean) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText, autoProcess, setAutoProcess }) => {
  const [rawWordCount, setRawWordCount] = useState(0);
  const [processedWordCount, setProcessedWordCount] = useState(0);
  const [estimatedDuration, setEstimatedDuration] = useState(0);
  const [estimatedScenes, setEstimatedScenes] = useState(0);

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setRawWordCount(words.length);
    
    // Simulate processing (remove 20% of words for optimization)
    const processed = Math.floor(words.length * 0.8);
    setProcessedWordCount(processed);
    
    // Estimate 150 words per minute for narration
    setEstimatedDuration(processed / 150);
    
    // Estimate 1 scene per 40 words
    setEstimatedScenes(Math.ceil(processed / 40));
  }, [text]);

  const sampleTexts = [
    {
      title: "Psalm 23 (KJV)",
      content: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me..."
    },
    {
      title: "John 3:16 (KJV)",
      content: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. For God sent not his Son into the world to condemn the world; but that the world through him might be saved..."
    }
  ];

  const handleSampleSelect = (content: string) => {
    setText(content);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Biblical Text Input & Processing</h2>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Auto-Process:</span>
            <button
              onClick={() => setAutoProcess(!autoProcess)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoProcess ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoProcess ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Settings className="h-4 w-4" />
            <span>Process Settings</span>
          </button>
          
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors pr-8"
              onChange={(e) => {
                const selectedSample = sampleTexts.find(sample => sample.title === e.target.value);
                if (selectedSample) handleSampleSelect(selectedSample.content);
              }}
            >
              <option value="">📋 Sample Texts</option>
              {sampleTexts.map((sample) => (
                <option key={sample.title} value={sample.title}>
                  {sample.title}
                </option>
              ))}
            </select>
            <Clipboard className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your biblical text here... Paste scripture, devotional content, or biblical teachings that you want to transform into a professional video."
          className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif text-gray-800 leading-relaxed"
          style={{ fontFamily: 'Georgia, serif' }}
        />

        <div className="flex flex-wrap items-center justify-between bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-6">
            <div className="text-sm">
              <span className="text-gray-600">Raw:</span>
              <span className="font-semibold text-gray-900 ml-1">{rawWordCount.toLocaleString()} words</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">→ Processed:</span>
              <span className="font-semibold text-blue-600 ml-1">{processedWordCount.toLocaleString()} words</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-gray-600">📊 Est. video:</span>
              <span className="font-semibold text-green-600">{estimatedDuration.toFixed(1)} min</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-gray-600">🎬 Scenes:</span>
              <span className="font-semibold text-purple-600">{estimatedScenes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInput;