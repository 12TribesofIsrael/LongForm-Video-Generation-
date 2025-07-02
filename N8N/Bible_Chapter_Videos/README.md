# 📖 Bible Chapter Video Generator

**🔄 Last Updated**: June 30, 2025

> **Professional Biblical Video Creation System**  
> Automated n8n workflow for generating high-quality biblical videos with dynamic timing and professional presentation.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Version](https://img.shields.io/badge/Version-v2.1.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

**📋 Document Version**: `v2.1.0`  
**🔄 Last Updated**: June 27, 2025  
**⚡ Latest Release**: See `RELEASES/v3.0.0/` for Black Hebrew Israelite specialized version

---

## 🎯 **Overview**

The Bible Chapter Video Generator is a fully automated system that transforms biblical text into professional-quality videos with:

- **📹 Dynamic Video Timing**: Auto-scales from 46 seconds to 6.5+ minutes based on content length
- **🎙️ Word-for-Word Narration**: Preserves biblical accuracy with Azure voice synthesis
- **🎨 Professional Presentation**: Optimized yellow captions, biblical imagery, spiritual themes
- **⚡ Automated Processing**: Python script handles text optimization and formatting
- **🔧 Production Ready**: Complete documentation and deployment guides

### **Key Features**
- ✅ **20-Scene Support** for longer biblical passages
- ✅ **Auto-Duration Timing** based on voice synthesis length
- ✅ **Professional Captions** with optimized styling
- ✅ **Biblical Imagery** generated with AI (Flux-Pro)
- ✅ **Text Processing Automation** with Python script
- ✅ **Complete Documentation** suite for production deployment

---

## 🚀 **Quick Start**

### **Prerequisites**
- n8n workflow automation platform
- JSON2Video API account (Startup plan recommended)
- Perplexity AI API access
- Python 3.x for text processing

### **Installation**
1. **Import n8n Workflow**:
   ```bash
   # Import BibleChapterMaster.json into your n8n instance
   ```

2. **Configure JSON2Video Template**:
   - Upload `BibleChapterTemplate.json` to your JSON2Video account
   - Note the template ID for workflow configuration

3. **Set Up Text Processing**:
   ```bash
   cd Bible_Chapter_Videos
   python biblical_text_processor.py
   ```

### **Basic Usage**
1. **Prepare Your Text**:
   ```bash
   # Edit the Input file with your biblical content
   notepad Input
   ```

2. **Process Text**:
   ```bash
   # Auto-optimize text for video generation
   python biblical_text_processor.py
   ```

3. **Generate Video**:
   - Copy processed text from generated `.txt` file
   - Paste into n8n workflow "Bible Chapter Text Input" node
   - Execute workflow
   - Monitor JSON2Video for completion

---

## 📁 **Project Structure**

```
Bible_Chapter_Videos/
├── 📋 CORE SYSTEM
│   ├── BibleChapterMaster.json          # Main n8n workflow
│   ├── BibleChapterTemplate.json        # JSON2Video template (20 scenes)
│   └── biblical_text_processor.py       # Text processing automation
│
├── 📝 INPUT/OUTPUT
│   ├── Input                            # Source biblical text
│   ├── processed_biblical_text_*.txt    # Processed output files
│   └── output/                          # Generated videos
│
├── 📚 DOCUMENTATION
│   ├── README.md                        # This file
│   ├── QUICK_START_GUIDE.md             # 30-minute setup guide
│   ├── PROJECT_OVERVIEW.md              # Technical architecture
│   ├── 4_MINUTE_VIDEO_OPTIMIZATION_GUIDE.md # Video optimization
│   └── HANDOVER_COMPLETE.md             # Complete project documentation
│
└── 🧪 TESTING
    ├── tests/                           # Test workflows
    └── templates/                       # Template variations
```

---

## ⚙️ **Configuration**

### **n8n Workflow Setup**
1. **API Configurations**:
   - Perplexity AI: Configure API key and model (llama-3.1-sonar-large-128k-online)
   - JSON2Video: Set API key and template ID

2. **Template Variables**:
   - Ensure all 20 scene variables are properly mapped
   - Configure voice settings (en-US-AriaNeural, speed 0.9)
   - Set caption styling (yellow text, size 80, black outline)

### **Text Processing Options**
```python
# biblical_text_processor.py configuration
MAX_WORDS = 1000          # Maximum word limit
EXPECTED_WPM = 150        # Words per minute for timing calculations
SCENES_PER_40_WORDS = 1   # Scene density calculation
```

---

## 📊 **Performance Metrics**

| Metric | Specification | Performance |
|--------|---------------|-------------|
| **Video Length** | Dynamic scaling | 46 seconds - 6.5+ minutes |
| **Word Processing** | Up to 1000 words | Optimal at 600-982 words |
| **Scene Support** | 20 scenes maximum | Handles 24+ scenes |
| **Processing Time** | Text + Video generation | 2-3 minutes + 5-10 minutes |
| **Quality** | Professional standard | HD video, optimized audio |

---

## 🎨 **Customization**

### **Caption Styling**
```json
{
  "font": "Arial",
  "size": 80,
  "color": "#FFFF00",
  "outline": {
    "color": "#000000",
    "width": 8
  }
}
```

### **Voice Configuration**
```json
{
  "voice": "en-US-AriaNeural",
  "speed": 0.9,
  "pitch": "medium",
  "emphasis": "moderate"
}
```

### **Image Generation**
- **Model**: Flux-Pro AI
- **Style**: Biblical, spiritual, reverent
- **Resolution**: HD quality
- **Themes**: Ancient biblical settings, spiritual imagery

---

## 🔧 **Maintenance**

### **Regular Tasks**
- [ ] Monitor JSON2Video API usage and credits
- [ ] Update biblical text sources as needed
- [ ] Review and optimize caption styling
- [ ] Backup processed text files monthly

### **Troubleshooting**
| Issue | Solution |
|-------|----------|
| Videos stuck at 77 seconds | Verify template has 20 scenes configured |
| Caption too large | Check font size set to 80 |
| Voice synthesis errors | Validate Azure voice settings |
| API failures | Check JSON2Video template ID and variables |

---

## 📈 **Optimization Guide**

### **Video Length Targets**
- **Short Videos (1-2 min)**: 200-400 words
- **Medium Videos (4-5 min)**: 600-800 words  
- **Long Videos (6-7 min)**: 900-1000 words

### **Biblical Content Recommendations**
- **Psalms**: Excellent for 4-6 minute videos
- **Proverbs**: Perfect for 2-3 minute videos
- **Gospel Passages**: Ideal for 5-7 minute videos
- **Epistles**: Great for 3-5 minute videos

---

## 🤝 **Contributing**

### **Enhancement Ideas**
- Batch processing for multiple chapters
- Multi-language support (Hebrew/Greek)
- Advanced biblical commentary integration
- Social media format variations
- Custom voice selection options

### **Development Setup**
```bash
git clone [repository]
cd Bible_Chapter_Videos
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

---

## 📞 **Support**

### **Documentation**
- 📚 **[Quick Start Guide](QUICK_START_GUIDE.md)** - 30-minute setup
- 🏗️ **[Project Overview](PROJECT_OVERVIEW.md)** - Technical architecture  
- 📊 **[Optimization Guide](4_MINUTE_VIDEO_OPTIMIZATION_GUIDE.md)** - Video optimization
- 🎯 **[Complete Handover](HANDOVER_COMPLETE.md)** - Full project documentation

### **Getting Help**
- Check the troubleshooting section in documentation
- Review test workflows in `/tests` directory
- Consult the complete handover documentation

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎉 **Acknowledgments**

- **JSON2Video**: Professional video generation platform
- **Perplexity AI**: Advanced language model for biblical content
- **Azure Cognitive Services**: High-quality voice synthesis
- **Flux-Pro**: AI-powered biblical imagery generation

---

**📖 Transform Biblical Text into Professional Videos with Ease 📖**

*The Bible Chapter Video Generator provides a complete solution for creating high-quality biblical videos with automated processing, dynamic timing, and professional presentation.* 