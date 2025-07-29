import React, { useState, useEffect } from 'react';
import { FileText, Download, Upload, RotateCcw, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface ProcessingMetrics {
  originalWordCount: number;
  processedWordCount: number;
  expectedMinutes: number;
  expectedScenes: number;
  truncationStatus: string;
  processingStatus: string;
}

interface EnhancedTextInputProps {
  text: string;
  setText: (text: string) => void;
  processedText: string;
  setProcessedText: (text: string) => void;
  autoProcess: boolean;
  setAutoProcess: (auto: boolean) => void;
  processingMetrics: ProcessingMetrics;
  setProcessingMetrics: (metrics: ProcessingMetrics) => void;
}

const EnhancedTextInput: React.FC<EnhancedTextInputProps> = ({
  text,
  setText,
  processedText,
  setProcessedText,
  autoProcess,
  setAutoProcess,
  processingMetrics,
  setProcessingMetrics
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingSettings, setProcessingSettings] = useState({
    maxWords: 1000,
    cleanText: true,
    preserveSentences: true,
    autoFormat: true
  });

  // Sample biblical texts
  const sampleTexts = [
    {
      name: "Genesis 1:1-10",
      text: "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness. And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. And God called the firmament Heaven. And the evening and the morning were the second day. And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so."
    },
    {
      name: "Psalm 23",
      text: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over. Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever."
    },
    {
      name: "John 3:16-21",
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. For God sent not his Son into the world to condemn the world; but that the world through him might be saved. He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God. And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil. For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved. But he that doeth truth cometh to the light, that his deeds may be made manifest, that they are wrought in God."
    }
  ];

  // Text processing function
  const processText = async (rawText: string) => {
    if (!rawText.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clean text (remove verse numbers, references)
    let cleaned = rawText
      .replace(/\d+:\d+/g, '') // Remove verse references
      .replace(/\[.*?\]/g, '') // Remove brackets
      .replace(/\(.*?\)/g, '') // Remove parentheses
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    
    // Count words
    const wordCount = cleaned.split(/\s+/).length;
    
    // Limit to maxWords (smart truncation)
    let processed = cleaned;
    let truncated = false;
    
    if (wordCount > processingSettings.maxWords) {
      const words = cleaned.split(/\s+/);
      processed = words.slice(0, processingSettings.maxWords).join(' ');
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
    
    setIsProcessing(false);
  };

  // Auto-process text when it changes
  useEffect(() => {
    if (autoProcess && text) {
      const timeoutId = setTimeout(() => {
        processText(text);
      }, 500); // Debounce processing
      
      return () => clearTimeout(timeoutId);
    }
  }, [text, autoProcess, processingSettings]);

  const loadSampleText = (sampleText: string) => {
    setText(sampleText);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setText(content);
      };
      reader.readAsText(file);
    }
  };

  const exportText = () => {
    const blob = new Blob([processedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'processed-biblical-text.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    if (status.includes('✅')) return 'text-green-600 bg-green-50 border-green-200';
    if (status.includes('⚠️')) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">📖 Biblical Text Input & Processing</h2>
        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={autoProcess}
              onChange={(e) => setAutoProcess(e.target.checked)}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <span className="text-sm font-medium text-gray-700">🔄 Auto-Process</span>
          </label>
          
          <div className="relative">
            <select className="text-sm text-blue-600 hover:text-blue-700 bg-transparent border-none focus:ring-0">
              <option>📋 Sample Text</option>
              {sampleTexts.map((sample, index) => (
                <option key={index} onClick={() => loadSampleText(sample.text)}>
                  {sample.name}
                </option>
              ))}
            </select>
          </div>
          
          <label className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer flex items-center space-x-1">
            <Upload className="h-4 w-4" />
            <span>📁 Upload File</span>
            <input
              type="file"
              accept=".txt,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raw Biblical Text
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your biblical text here (Genesis 1:1-31, Psalm 23, etc.)"
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-serif text-gray-900 resize-none"
          />
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span>Raw: {processingMetrics.originalWordCount} words</span>
            {isProcessing && (
              <div className="flex items-center space-x-1 text-blue-600">
                <div className="animate-spin rounded-full h-3 w-3 border-b border-current"></div>
                <span>Processing...</span>
              </div>
            )}
          </div>
        </div>

        {/* Processed Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Processed Text
          </label>
          <textarea
            value={processedText}
            readOnly
            placeholder="Processed text will appear here..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 font-serif text-gray-900 resize-none"
          />
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span>Processed: {processingMetrics.processedWordCount} words</span>
            {processedText && (
              <button
                onClick={exportText}
                className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
              >
                <Download className="h-3 w-3" />
                <span>Export</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Processing Metrics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-1">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Duration</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{processingMetrics.expectedMinutes}</div>
          <div className="text-xs text-blue-600">minutes</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-1">
            <FileText className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Scenes</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{processingMetrics.expectedScenes}</div>
          <div className="text-xs text-green-600">total scenes</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-1">
            <CheckCircle className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Status</span>
          </div>
          <div className="text-sm font-bold text-purple-600">{processingMetrics.truncationStatus}</div>
          <div className="text-xs text-purple-600">text status</div>
        </div>
        
        <div className={`p-4 rounded-lg border ${getStatusColor(processingMetrics.processingStatus)}`}>
          <div className="flex items-center space-x-2 mb-1">
            {processingMetrics.processingStatus.includes('✅') ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-yellow-600" />
            )}
            <span className="text-sm font-medium">Processing</span>
          </div>
          <div className="text-sm font-bold">{processingMetrics.processingStatus}</div>
          <div className="text-xs">optimization</div>
        </div>
      </div>

      {/* Processing Settings */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-3">⚙️ Processing Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Max Words</label>
            <input
              type="range"
              min="500"
              max="2000"
              step="100"
              value={processingSettings.maxWords}
              onChange={(e) => setProcessingSettings({...processingSettings, maxWords: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-sm text-gray-500 mt-1">{processingSettings.maxWords} words</div>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={processingSettings.cleanText}
              onChange={(e) => setProcessingSettings({...processingSettings, cleanText: e.target.checked})}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Clean text (remove verse numbers)</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={processingSettings.preserveSentences}
              onChange={(e) => setProcessingSettings({...processingSettings, preserveSentences: e.target.checked})}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Preserve complete sentences</span>
          </div>
        </div>
        
        <div className="mt-3 flex space-x-2">
          <button
            onClick={() => processText(text)}
            disabled={!text.trim() || isProcessing}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Process Now</span>
          </button>
          
          <button
            onClick={() => setText('')}
            className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTextInput; 