# 🎬 Bible Chapter Video Generator - Production User Guide

**📋 Document Version**: `v2.1.0`  
**🔄 Last Updated**: June 26, 2025 at 9:56 PM  
**🎯 Purpose**: Complete step-by-step guide for production use

---

## 🚀 **Quick Start - Get Running in 30 Minutes**

### **⚡ What You'll Create**
Professional biblical videos (4-7 minutes) with:
- ✅ **Word-for-word biblical narration** (no summarization)
- ✅ **Professional yellow captions** with black outline
- ✅ **Biblical imagery** generated with AI
- ✅ **Dynamic timing** that scales with content length

### **📋 What You Need**
- Computer with Python 3.7+
- n8n workflow platform account
- JSON2Video account (Startup Plan $99.95/month recommended)
- Perplexity AI account with API access

---

## 📦 **Step 1: System Setup (15 minutes)**

### **🔧 Required Accounts & APIs**

#### **1. JSON2Video Account**
```
🌐 Website: https://json2video.com/pricing/
💰 Recommended Plan: Startup ($99.95/month)
✅ Features Needed: 30-minute video limit, 30,000 credits
📝 Note: Get API key from dashboard
```

#### **2. Perplexity AI Account**
```
🌐 Website: https://www.perplexity.ai/
💰 Plan: Pro ($20/month) or API credits
✅ Model Needed: llama-3.1-sonar-large-128k-online
📝 Note: Get API key for n8n integration
```

#### **3. n8n Platform**
```
🌐 Website: https://n8n.io/
💰 Plan: Cloud ($20/month) or Self-hosted (free)
✅ Features Needed: Workflow automation, API integrations
📝 Note: Import provided workflows
```

### **📁 Download Your System Files**

#### **Choose Your Version**:

**🌟 For General Biblical Content**: `RELEASES/v2.1.0/`
- `BibleChapterMaster-v2.1.0.json` (n8n workflow)
- `biblical_text_processor-v1.1.0.py` (text processor)

**🌟 For Black Hebrew Israelite Content**: `RELEASES/v3.0.0/`
- `BHI-Workflow-v3.0.0.json` (specialized workflow)
- `BHI-Template-v3.0.0.json` (cultural template)

---

## ⚙️ **Step 2: Platform Configuration (10 minutes)**

### **🔄 Import n8n Workflow**

#### **Method 1: JSON Import**
1. **Open n8n dashboard**
2. **Click "+ New Workflow"**
3. **Click "..." menu → Import from File**
4. **Select your downloaded workflow JSON**
5. **Click "Import"**

#### **Method 2: Copy-Paste**
1. **Open the JSON file in notepad**
2. **Copy all content (Ctrl+A, Ctrl+C)**
3. **In n8n: "..." menu → Import from Clipboard**
4. **Paste and import**

### **🔑 Configure API Credentials**

#### **Perplexity AI Setup**:
1. **In n8n workflow, click Perplexity AI node**
2. **Click "Create New" credential**
3. **Name**: "Perplexity-API"
4. **Auth Type**: Header Auth
5. **Header Name**: `Authorization`
6. **Header Value**: `Bearer pplx-YOUR_API_KEY`
7. **Save credential**

#### **JSON2Video Setup**:
1. **Click JSON2Video node in workflow**
2. **Create credential: "Json2Video-API"**
3. **Auth Type**: Header Auth  
4. **Header Name**: `x-api-key`
5. **Header Value**: `YOUR_JSON2VIDEO_API_KEY`
6. **Save credential**

### **📋 Template Configuration**

#### **For v2.1.0 (General Biblical)**:
- **Template ID**: Use existing template in workflow
- **No additional upload needed**

#### **For v3.0.0 (Black Hebrew Israelite)**:
1. **Upload template to JSON2Video**:
   - Login to JSON2Video dashboard
   - Upload `BHI-Template-v3.0.0.json`
   - **Copy the new template ID**
2. **Update workflow**:
   - In n8n workflow, find JSON2Video node
   - Update template ID with your new ID

---

## 🎬 **Step 3: Create Your First Video (5 minutes)**

### **📝 Prepare Your Biblical Text**

#### **Option A: Use Text Processor (Recommended)**
```bash
# 1. Navigate to your Bible_Chapter_Videos folder
cd Bible_Chapter_Videos

# 2. Create/edit Input file
notepad Input

# 3. Paste your biblical text (any length)
# Example: Genesis 1:1-31, Psalm 23, etc.

# 4. Run processor
python biblical_text_processor.py

# 5. Copy the processed text output
```

#### **Option B: Manual Text (Quick Test)**
```
Just use a short biblical passage like:
"In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. And God said, 'Let there be light,' and there was light."
```

### **🚀 Generate Video**

1. **Open your n8n workflow**
2. **Click the "Bible Chapter Text Input" node**
3. **Paste your processed biblical text**
4. **Click "Execute Workflow"**
5. **Wait 2-3 minutes for AI processing**
6. **Monitor JSON2Video status (5-10 minutes)**
7. **Download your completed video!**

---

## 📋 **Daily Production Workflow**

### **🔄 Standard Operating Procedure**

#### **Morning Setup (2 minutes)**
1. **Check API credits**:
   - Perplexity AI credits remaining
   - JSON2Video monthly usage
2. **Prepare content queue**:
   - List biblical passages for the day
   - Prioritize by length/complexity

#### **Per-Video Process (7-12 minutes)**

**📝 Content Preparation (2-3 minutes)**:
```bash
# 1. Add biblical text to Input file
notepad Input
# Paste: Psalm 23, Genesis 1, Romans 8, etc.

# 2. Process text
python biblical_text_processor.py
# Note the metrics: "Expected video length: 4.2 minutes"

# 3. Copy processed text
```

**🎬 Video Generation (5-8 minutes)**:
```bash
# 1. Open n8n workflow
# 2. Paste processed text into "Bible Chapter Text Input"
# 3. Execute workflow
# 4. Wait for completion
# 5. Download video
```

**✅ Quality Check (1-2 minutes)**:
- [ ] Video plays correctly
- [ ] Audio is clear and appropriate speed
- [ ] Captions are readable and properly sized
- [ ] Biblical accuracy maintained
- [ ] Length matches expectations

#### **End of Day (5 minutes)**
1. **Backup processed text files**
2. **Archive completed videos**
3. **Review usage metrics**
4. **Plan next day's content**

---

## 📊 **Production Capacity Planning**

### **📈 Expected Output**

| Plan | Monthly Cost | Videos/Month | Video Length | Total Minutes |
|------|-------------|--------------|--------------|---------------|
| **JSON2Video Startup** | $99.95 | 75-100 videos | 4-7 minutes | 500 minutes |
| **Perplexity Pro** | $20 | Unlimited* | N/A | N/A |

*Subject to fair use limits

### **⏱️ Time Requirements**

| Task | Time per Video | Daily Capacity |
|------|----------------|----------------|
| **Text Processing** | 2-3 minutes | 20-30 videos |
| **Video Generation** | 5-8 minutes | 8-12 videos |
| **Quality Review** | 1-2 minutes | 30-60 videos |
| **Total per Video** | 8-13 minutes | **6-8 videos/day** |

### **💰 Cost per Video**
```
JSON2Video: $99.95 ÷ 80 videos = $1.25 per video
Perplexity: $20 ÷ 1000 videos = $0.02 per video
Total: ~$1.27 per biblical video
```

---

## 🎯 **Content Strategy Guide**

### **📖 Optimal Biblical Content**

#### **Best Video Lengths**:
- **Short (2-3 min)**: Psalms, Proverbs, single verses with commentary
- **Medium (4-6 min)**: Gospel passages, complete Psalms, Romans chapters
- **Long (6-8 min)**: Genesis chapters, extended teachings, complete stories

#### **Recommended Content**:
```
📚 HIGH-ENGAGEMENT CONTENT:
- Creation story (Genesis 1-2)
- David & Goliath (1 Samuel 17)
- The Ten Commandments (Exodus 20)
- Psalm 23 & Psalm 91
- Christmas story (Luke 2)
- Easter story (Matthew 28)
- Parables of Jesus
- Armor of God (Ephesians 6)

📚 EVERGREEN CONTENT:
- Book introductions
- Character studies
- Thematic compilations
- Daily devotional content
```

### **📊 Content Calendar Planning**

#### **Weekly Schedule Example**:
```
Monday: Creation & Origins (Genesis)
Tuesday: Psalms & Worship
Wednesday: Jesus' Teachings (Gospels)
Thursday: Paul's Letters (Romans, Ephesians)
Friday: Prophecy & Revelation
Saturday: Old Testament Stories
Sunday: Rest & Reflection content
```

---

## 🔧 **Customization Options**

### **⚙️ Text Processor Modifications**

#### **Adjust Word Limits**:
```python
# In biblical_text_processor.py, line ~125
limited_words = limit_to_words(words, max_words=1200)  # Longer videos
limited_words = limit_to_words(words, max_words=800)   # Shorter videos
```

#### **Change Speech Rate**:
```python
# Line ~135 - Adjust for voice speed
expected_minutes = word_count / 120  # Slower (120 WPM)
expected_minutes = word_count / 180  # Faster (180 WPM)
```

### **🎨 Visual Customization**

#### **Caption Styling** (JSON2Video Template):
```json
{
  "font": "Arial",           // Change font
  "size": 80,               // Adjust size (60-100)
  "color": "#FFFF00",       // Yellow (or change color)
  "outline-width": 8        // Outline thickness
}
```

#### **Voice Settings**:
```json
{
  "voice": "en-US-AriaNeural",  // Female voice
  "voice": "en-US-GuyNeural",   // Male alternative
  "speed": 0.9                  // Adjust speed (0.8-1.2)
}
```

---

## 🐛 **Troubleshooting Guide**

### **❌ Common Issues & Solutions**

#### **Issue**: "Input file not found"
**Solution**:
```bash
# Create the Input file in Bible_Chapter_Videos folder
cd Bible_Chapter_Videos
notepad Input
# Add your biblical text and save
```

#### **Issue**: "API Authentication Failed"
**Solution**:
1. **Check API keys are correct**
2. **Verify credit availability**
3. **Test API connections in n8n**

#### **Issue**: "Video generation failed"
**Solution**:
1. **Check JSON2Video template ID**
2. **Verify all workflow nodes are connected**
3. **Review error messages in n8n execution log**

#### **Issue**: "Video too short/long"
**Solution**:
```bash
# Adjust word count in text processor
# For 4-minute videos: aim for 600-650 words
# For 6-minute videos: aim for 900-1000 words
```

#### **Issue**: "Captions too large/small"
**Solution**:
1. **In JSON2Video template, adjust font size**
2. **Size 80 = optimal for most content**
3. **Size 60-70 = smaller text**
4. **Size 90-100 = larger text**

### **🔍 Quality Issues**

#### **Audio Problems**:
- **Too fast**: Adjust voice speed to 0.8
- **Too slow**: Adjust voice speed to 1.1
- **Wrong voice**: Change voice model in template

#### **Visual Problems**:
- **Low image quality**: Verify using Flux-Pro model
- **Inappropriate images**: Review AI prompts for biblical accuracy
- **Caption issues**: Adjust font size and color in template

---

## 📈 **Scaling for Production**

### **🚀 Growth Strategies**

#### **Batch Processing Setup**:
1. **Prepare multiple Input files**: `Input1`, `Input2`, etc.
2. **Process in sequence**: Run script on each file
3. **Queue video generation**: Generate videos in batches
4. **Automate scheduling**: Use n8n scheduling features

#### **Team Collaboration**:
```
📝 Content Team: Prepare biblical text and research
🎬 Production Team: Run workflows and generate videos
✅ Quality Team: Review and approve content
📊 Analytics Team: Track performance and optimize
```

### **💼 Enterprise Features**

#### **Advanced Automation**:
- **Scheduled workflows**: Daily video generation
- **Batch processing**: Multiple videos simultaneously
- **Quality gates**: Automated review processes
- **Analytics integration**: Track video performance

#### **Content Management**:
- **Version control**: Track all biblical content versions
- **Asset management**: Organize videos by topic/series
- **Distribution**: Multi-platform publishing
- **Rights management**: Ensure biblical accuracy and licensing

---

## 📞 **Support & Resources**

### **📚 Documentation Library**
- **📋 This Guide**: `PRODUCTION_USER_GUIDE.md` - Complete user guide
- **🤖 Script Guide**: `AUTOMATION_SCRIPTS_GUIDE.md` - Text processor details
- **🏗️ Architecture**: `SYSTEM_ARCHITECTURE.md` - Technical details
- **🔧 Version Control**: `VERSIONING_STRATEGY.md` - Version management
- **📁 Organization**: `FOLDER_STRUCTURE_GUIDE.md` - File navigation

### **🛠️ Technical Support**

#### **Self-Service Resources**:
1. **Check troubleshooting section above**
2. **Review documentation for specific features**
3. **Test with sample content first**
4. **Verify all API credentials and connections**

#### **Best Practices for Issues**:
1. **Document the exact error message**
2. **Note what content was being processed**
3. **Check n8n execution logs**
4. **Test with simpler content first**

### **📊 Success Metrics**

#### **Track These KPIs**:
- **Videos Generated per Day**: Target 6-8 videos
- **Success Rate**: Target 95%+ successful generations
- **Average Video Length**: Target 4-6 minutes
- **Processing Time**: Target <10 minutes per video
- **Quality Score**: Based on review checklist

---

## 🎊 **Production Launch Checklist**

### **✅ Pre-Launch Validation**
- [ ] **All API accounts created and funded**
- [ ] **n8n workflow imported and tested**
- [ ] **Template uploaded to JSON2Video**
- [ ] **Text processor script working**
- [ ] **Sample video generated successfully**
- [ ] **Quality standards defined**
- [ ] **Content calendar prepared**
- [ ] **Team trained on procedures**

### **🚀 Go-Live Process**
1. **Start with 1-2 videos per day**
2. **Monitor all metrics and quality**
3. **Gather feedback and optimize**
4. **Scale up to full production capacity**
5. **Implement continuous improvement**

---

**🏆 SUCCESS FORMULA**: 
Text Processor → n8n Workflow → JSON2Video → Quality Check → Biblical Video Ready for Distribution!

**⚡ RESULT**: Professional biblical videos in 8-13 minutes with word-for-word accuracy, professional presentation, and scalable production workflow.** 