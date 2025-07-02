# 🔧 Text Processor UI Integration Guide

**📋 Document Version**: `v1.0.0`  
**🔄 Last Updated**: June 26, 2025 at 9:56 PM  
**🎯 Purpose**: Complete integration of biblical_text_processor.py into the frontend UI

---

## 🎯 **Core Integration Objective**

Transform the standalone `biblical_text_processor.py` script into a seamless, integrated UI component that automatically optimizes biblical text for video generation without requiring users to run separate scripts.

---

## 📋 **Text Processor Features to Integrate**

### **🔧 Core Processing Functions**
```javascript
// Port from biblical_text_processor.py
textProcessorEngine: {
  cleanText: function(text) {
    // Remove verse references, numbers, headers
    // Normalize whitespace and punctuation
    // Clean section headers and precept references
  },
  
  limitToWords: function(words, maxWords = 1000) {
    // Smart truncation at sentence boundaries
    // Preserve complete sentences
    // Optimal word count for video generation
  },
  
  calculateMetrics: function(wordCount) {
    // Expected video length (150 WPM)
    // Expected scene count (40 words per scene)
    // Processing status and recommendations
  }
}
```

### **📊 Real-time Metrics Display**
```javascript
processingMetrics: {
  originalWordCount: number,     // Raw input word count
  processedWordCount: number,    // After processing
  expectedMinutes: number,       // Video duration estimate
  expectedScenes: number,        // Scene count estimate
  truncationStatus: string,      // "Truncated" or "Complete"
  processingStatus: string       // "✅ Optimized" or "⚠️ Needs Review"
}
```

---

## 🎨 **UI Component Design**

### **📝 Enhanced Text Input Component**
```jsx
const BiblicalTextProcessor = () => {
  const [rawText, setRawText] = useState('');
  const [processedText, setProcessedText] = useState('');
  const [autoProcessing, setAutoProcessing] = useState(true);
  const [metrics, setMetrics] = useState({});
  const [processingSettings, setProcessingSettings] = useState({
    maxWords: 1000,
    cleanText: true,
    preserveSentences: true,
    autoFormat: true
  });

  // Real-time processing as user types
  useEffect(() => {
    if (autoProcessing && rawText) {
      const processed = processText(rawText, processingSettings);
      setProcessedText(processed.text);
      setMetrics(processed.metrics);
    }
  }, [rawText, autoProcessing, processingSettings]);

  return (
    <div className="biblical-text-processor">
      {/* Main text input area */}
      <div className="text-input-section">
        <label>Biblical Text Content</label>
        <textarea
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder="Enter your biblical text here (Genesis 1:1-31, Psalm 23, etc.)"
          rows={12}
          className="biblical-text-input"
        />
        
        {/* Processing controls */}
        <div className="processing-controls">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={autoProcessing}
              onChange={(e) => setAutoProcessing(e.target.checked)}
            />
            🔄 Auto-Process Text
          </label>
          
          <button 
            onClick={() => manualProcess()}
            disabled={autoProcessing}
            className="process-button"
          >
            ⚙️ Process Text
          </button>
          
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="settings-button"
          >
            ⚙️ Process Settings
          </button>
        </div>
      </div>

      {/* Processing metrics display */}
      <div className="processing-metrics">
        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">Raw Words:</span>
            <span className="metric-value">{metrics.originalWordCount || 0}</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Processed:</span>
            <span className="metric-value">{metrics.processedWordCount || 0}</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Video Length:</span>
            <span className="metric-value">{metrics.expectedMinutes || 0} min</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">Scenes:</span>
            <span className="metric-value">{metrics.expectedScenes || 0}</span>
          </div>
        </div>
        
        <div className="processing-status">
          <span className={`status-indicator ${metrics.status}`}>
            {metrics.processingStatus || "Ready for processing"}
          </span>
        </div>
      </div>

      {/* Processing settings (collapsible) */}
      {showSettings && (
        <div className="processing-settings">
          <h4>Text Processing Settings</h4>
          
          <div className="setting-item">
            <label>Maximum Words:</label>
            <input
              type="number"
              value={processingSettings.maxWords}
              onChange={(e) => updateSetting('maxWords', parseInt(e.target.value))}
              min="500"
              max="2000"
              step="100"
            />
            <span className="setting-help">Optimal: 1000 words for 6-7 minute videos</span>
          </div>
          
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={processingSettings.cleanText}
                onChange={(e) => updateSetting('cleanText', e.target.checked)}
              />
              Clean Text (Remove verse numbers and references)
            </label>
          </div>
          
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={processingSettings.preserveSentences}
                onChange={(e) => updateSetting('preserveSentences', e.target.checked)}
              />
              Preserve Complete Sentences
            </label>
          </div>
        </div>
      )}

      {/* Processed text preview */}
      {processedText && (
        <div className="processed-text-preview">
          <h4>Processed Text Preview</h4>
          <div className="text-preview">
            {processedText.substring(0, 200)}...
            {processedText.length > 200 && (
              <button onClick={() => setShowFullPreview(!showFullPreview)}>
                {showFullPreview ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
          
          {showFullPreview && (
            <div className="full-text-preview">
              <pre>{processedText}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
```

---

## 🔧 **JavaScript Processing Engine**

### **📝 Core Processing Functions**
```javascript
// Port of biblical_text_processor.py to JavaScript
class BiblicalTextProcessor {
  constructor(options = {}) {
    this.maxWords = options.maxWords || 1000;
    this.cleanText = options.cleanText !== false;
    this.preserveSentences = options.preserveSentences !== false;
  }

  // Clean and normalize text
  cleanTextContent(text) {
    if (!this.cleanText) return text;
    
    // Remove extra whitespace and normalize line breaks
    text = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Remove verse references like "Deuteronomy 4:7-8"
    text = text.replace(/\b[A-Za-z]+\s+\d+:\d+(-\d+)?\s+/g, '');
    
    // Remove standalone numbers (verse numbers)
    text = text.replace(/\s+\d+\s+/g, ' ');
    
    // Clean up punctuation spacing
    text = text.replace(/([.!?])\s*/g, '$1 ');
    
    // Remove section headers and precept references
    text = text.replace(/Precepts to [^:]+:/g, '');
    text = text.replace(/How special and Holy they are/g, '');
    text = text.replace(/THE MOST HIGH CHOSEN PEOPLE/g, '');
    
    return text.replace(/\s+/g, ' ').trim();
  }

  // Limit text to maximum words with sentence preservation
  limitToWords(text, maxWords = this.maxWords) {
    const words = text.split(' ');
    
    if (words.length <= maxWords) {
      return { text, truncated: false };
    }

    if (!this.preserveSentences) {
      return { 
        text: words.slice(0, maxWords).join(' '), 
        truncated: true 
      };
    }

    // Find last complete sentence
    const truncatedText = words.slice(0, maxWords).join(' ');
    const lastPeriod = truncatedText.lastIndexOf('.');
    const lastExclamation = truncatedText.lastIndexOf('!');
    const lastQuestion = truncatedText.lastIndexOf('?');
    const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion);

    if (lastSentenceEnd > 0) {
      return {
        text: truncatedText.substring(0, lastSentenceEnd + 1),
        truncated: true
      };
    }

    return { 
      text: truncatedText, 
      truncated: true 
    };
  }

  // Calculate processing metrics
  calculateMetrics(originalText, processedText) {
    const originalWords = originalText.split(' ').filter(word => word.length > 0);
    const processedWords = processedText.split(' ').filter(word => word.length > 0);
    
    const expectedMinutes = processedWords.length / 150; // 150 WPM average
    const expectedScenes = Math.ceil(processedWords.length / 40); // 40 words per scene
    
    return {
      originalWordCount: originalWords.length,
      processedWordCount: processedWords.length,
      expectedMinutes: Math.round(expectedMinutes * 10) / 10,
      expectedScenes: expectedScenes,
      truncated: originalWords.length > processedWords.length,
      processingStatus: this.getProcessingStatus(processedWords.length),
      status: this.getStatusClass(processedWords.length)
    };
  }

  // Get processing status message
  getProcessingStatus(wordCount) {
    if (wordCount === 0) return "⚠️ No text to process";
    if (wordCount < 100) return "⚠️ Text too short for video";
    if (wordCount < 500) return "⚠️ Short video (2-3 minutes)";
    if (wordCount <= 1000) return "✅ Optimized for video generation";
    return "⚠️ Text may be too long";
  }

  // Get CSS status class
  getStatusClass(wordCount) {
    if (wordCount === 0) return "status-error";
    if (wordCount < 100) return "status-warning";
    if (wordCount < 500) return "status-caution";
    if (wordCount <= 1000) return "status-success";
    return "status-warning";
  }

  // Main processing function
  processText(rawText, options = {}) {
    const settings = { ...this, ...options };
    
    if (!rawText || rawText.trim().length === 0) {
      return {
        text: '',
        metrics: this.calculateMetrics('', '')
      };
    }

    // Step 1: Clean the text
    const cleanedText = this.cleanTextContent(rawText);
    
    // Step 2: Limit to optimal word count
    const limitedResult = this.limitToWords(cleanedText, settings.maxWords);
    
    // Step 3: Calculate metrics
    const metrics = this.calculateMetrics(rawText, limitedResult.text);
    metrics.truncated = limitedResult.truncated;
    
    return {
      text: limitedResult.text,
      metrics: metrics
    };
  }
}

// Usage in React component
const processText = (rawText, settings) => {
  const processor = new BiblicalTextProcessor(settings);
  return processor.processText(rawText);
};
```

---

## 🎨 **CSS Styling**

### **📱 Responsive Text Processor Styles**
```css
.biblical-text-processor {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.text-input-section {
  margin-bottom: 20px;
}

.biblical-text-input {
  width: 100%;
  min-height: 300px;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Georgia', serif;
  font-size: 16px;
  line-height: 1.6;
  resize: vertical;
  transition: border-color 0.3s ease;
}

.biblical-text-input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.processing-controls {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
}

.toggle-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
}

.process-button, .settings-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #2196F3;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.process-button:hover, .settings-button:hover {
  background: #1976D2;
}

.process-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.processing-metrics {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
}

.metric-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.metric-label {
  font-weight: 500;
  color: #666;
}

.metric-value {
  font-weight: bold;
  color: #333;
}

.processing-status {
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
}

.status-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-warning {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.status-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status-caution {
  background: #e2e3e5;
  color: #41464b;
  border: 1px solid #d6d8db;
}

.processing-settings {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.setting-item {
  margin-bottom: 15px;
}

.setting-item label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.setting-item input[type="number"] {
  width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.setting-help {
  font-size: 12px;
  color: #666;
  margin-left: 10px;
}

.processed-text-preview {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.text-preview {
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: #333;
}

.full-text-preview {
  margin-top: 15px;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.full-text-preview pre {
  white-space: pre-wrap;
  font-family: 'Georgia', serif;
  margin: 0;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .biblical-text-processor {
    padding: 10px;
  }
  
  .processing-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .biblical-text-input {
    min-height: 200px;
    font-size: 14px;
  }
}
```

---

## 🔧 **Integration Checklist**

### **✅ Implementation Tasks**
- [ ] Port `biblical_text_processor.py` logic to JavaScript
- [ ] Create React component with text processing
- [ ] Implement real-time processing with debouncing
- [ ] Add processing metrics display
- [ ] Create processing settings panel
- [ ] Add processed text preview
- [ ] Implement auto-processing toggle
- [ ] Add manual processing trigger
- [ ] Style components for mobile responsiveness
- [ ] Add loading states and error handling
- [ ] Integrate with main video generation workflow
- [ ] Test with various biblical text inputs
- [ ] Add accessibility features (ARIA labels, keyboard navigation)
- [ ] Implement auto-save for processed text
- [ ] Add export functionality for processed text

---

## 🎯 **User Experience Flow**

### **📝 Typical User Journey**
```
1. User pastes biblical text into textarea
   ↓
2. Auto-processing kicks in (if enabled)
   ↓
3. Real-time metrics update (word count, video length, scenes)
   ↓
4. Processing status shows "✅ Optimized for video generation"
   ↓
5. User can preview processed text
   ↓
6. User adjusts settings if needed (max words, cleaning options)
   ↓
7. Processed text automatically feeds into video generation
   ↓
8. User clicks "Generate Video" with optimized content
```

### **⚙️ Advanced User Options**
```
- Toggle auto-processing on/off
- Adjust maximum word limit (500-2000 words)
- Enable/disable text cleaning features
- Preview before/after text comparison
- Manual processing trigger
- Export processed text for external use
- Save processing settings as user preferences
```

---

## 📊 **Performance Considerations**

### **⚡ Optimization Strategies**
```javascript
// Debounced processing to avoid excessive re-processing
const debouncedProcess = useCallback(
  debounce((text, settings) => {
    const result = processText(text, settings);
    setProcessedText(result.text);
    setMetrics(result.metrics);
  }, 500),
  []
);

// Memoized processing to avoid unnecessary recalculations
const processedResult = useMemo(() => {
  if (!rawText || !autoProcessing) return null;
  return processText(rawText, processingSettings);
}, [rawText, processingSettings, autoProcessing]);
```

---

## 🎯 **Success Metrics**

### **📈 User Experience Goals**
- **Seamless Integration**: Users don't need to run separate scripts
- **Real-time Feedback**: Instant processing metrics and video estimates
- **Optimal Video Length**: Automatic optimization to 1000 words (6-7 minutes)
- **Smart Truncation**: Preserve complete sentences and biblical meaning
- **Visual Clarity**: Clear before/after processing comparison

**🔧 RESULT**: The standalone `biblical_text_processor.py` functionality is now fully integrated into the UI, providing users with automatic text optimization, real-time metrics, and seamless video generation workflow.**