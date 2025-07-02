# 🚀 Quick Start Guide - Bible Chapter Videos

## ⚡ **Get Started in 30 Minutes**

### **Step 1: Choose Your Development Path (5 min)**

**Option A: Python Script Development** ⭐ **RECOMMENDED**
```bash
# Pros: Full control, faster iteration, easier debugging
# Cons: Need to build from scratch
cd Bible_Chapter_Videos
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install requests json2video-sdk
```

**Option B: Extend Your n8n Workflow**
```bash
# Pros: Leverage existing system, visual workflow
# Cons: More complex for dynamic templates
# Use your existing scale/ScaleMaster.json as base
```

---

### **Step 2: Test JSON2Video API (10 min)**

**Get Your API Key:**
1. Go to https://json2video.com/pricing/
2. Sign up for **Startup Plan** ($99.95/month)
3. Get API key from dashboard

**Test Basic Connection:**
```python
# test_connection.py
import requests

API_KEY = "your-api-key-here"
API_BASE = "https://api.json2video.com/v2"

def test_api():
    headers = {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    }
    
    # Simple test template
    test_template = {
        "resolution": "full-hd",
        "scenes": [{
            "elements": [{
                "type": "text",
                "text": "Bible Chapter Video Test",
                "duration": 5
            }]
        }]
    }
    
    response = requests.post(f"{API_BASE}/movies", 
                           json=test_template, 
                           headers=headers)
    
    if response.status_code == 200:
        print("✅ API Connection Success!")
        print(f"Project ID: {response.json()['project']}")
        return response.json()['project']
    else:
        print(f"❌ API Error: {response.text}")
        return None

# Run test
project_id = test_api()
```

---

### **Step 3: Get Bible Text (10 min)**

**Option A: Bible API (Quick Start)**
```python
# bible_text.py
import requests

def get_chapter_text(book, chapter):
    """Get chapter text from Bible API"""
    url = f"https://bible-api.com/{book}+{chapter}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return {
            'reference': data['reference'],
            'text': data['text'],
            'verses': data['verses']
        }
    return None

# Test with Genesis 1
genesis_1 = get_chapter_text('genesis', 1)
if genesis_1:
    print(f"✅ Got {genesis_1['reference']}")
    print(f"Character count: {len(genesis_1['text'])}")
    print(f"First 100 chars: {genesis_1['text'][:100]}...")
```

**Option B: Local Bible JSON**
```python
# Download from: https://github.com/aruljohn/Bible-kjv/blob/master/kjv.json
import json

with open('bible-kjv.json', 'r') as f:
    bible_data = json.load(f)

def get_local_chapter(book, chapter):
    # Parse local Bible data
    pass
```

---

### **Step 4: Create Your First Bible Video (5 min)**

**Quick Test Script:**
```python
# first_bible_video.py
import requests
import json
import time

API_KEY = "your-api-key-here"
API_BASE = "https://api.json2video.com/v2"

def create_simple_bible_video():
    # Get Bible text
    genesis_1 = get_chapter_text('genesis', 1)
    
    if not genesis_1:
        print("❌ Failed to get Bible text")
        return
    
    # Create simple template
    template = {
        "resolution": "full-hd",
        "comment": f"Bible Video: {genesis_1['reference']}",
        "scenes": [
            {
                "comment": "Title Scene",
                "duration": 5,
                "elements": [
                    {
                        "type": "text",
                        "text": genesis_1['reference'],
                        "duration": 5,
                        "position": "center-center"
                    }
                ]
            },
            {
                "comment": "Chapter Content",
                "duration": 30,
                "elements": [
                    {
                        "type": "voice",
                        "text": genesis_1['text'][:1000],  # First 1000 chars
                        "voice": "en-US-JennyNeural"
                    }
                ]
            }
        ]
    }
    
    # Submit to JSON2Video
    headers = {
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
    }
    
    response = requests.post(f"{API_BASE}/movies", 
                           json=template, 
                           headers=headers)
    
    if response.status_code == 200:
        project_id = response.json()['project']
        print(f"✅ Video creation started!")
        print(f"Project ID: {project_id}")
        
        # Check status (this will take several minutes)
        print("⏳ Checking status in 2 minutes...")
        time.sleep(120)  # Wait 2 minutes
        
        status_response = requests.get(f"{API_BASE}/movies?project={project_id}",
                                     headers=headers)
        
        if status_response.status_code == 200:
            status_data = status_response.json()
            print(f"Status: {status_data['movie']['status']}")
            
            if status_data['movie']['status'] == 'done':
                print(f"🎉 Video completed!")
                print(f"Download URL: {status_data['movie']['url']}")
            else:
                print("⏳ Still processing... check again later")
        
        return project_id
    else:
        print(f"❌ Error: {response.text}")
        return None

# Run the test
if __name__ == "__main__":
    create_simple_bible_video()
```

---

## 🎯 **What You Should Have After 30 Minutes**

### **Success Checklist:**
- [ ] ✅ JSON2Video API connection working
- [ ] ✅ Bible text retrieval working
- [ ] ✅ First test video submitted
- [ ] ✅ Understanding of the process flow

### **Expected Results:**
- Simple 35-second video with:
  - Title screen showing "Genesis 1"  
  - Voice narration of Genesis 1 text
  - Basic template structure

---

## 🚀 **Next Immediate Steps**

### **After Your First Success:**

1. **Analyze Your First Video**
   - How long did processing take?
   - Video quality satisfactory?
   - Audio clear and well-paced?

2. **Test with Different Chapters** 
   ```python
   # Try these for variety:
   get_chapter_text('psalms', 23)    # Short chapter
   get_chapter_text('psalms', 119)   # Long chapter (stress test)
   get_chapter_text('john', 3)       # New Testament
   ```

3. **Plan Dynamic Template**
   - Look at successful video structure
   - Identify what needs to be dynamic
   - Plan scene count calculation

---

## 🛠️ **Development Environment Setup**

### **Recommended Project Structure:**
```
Bible_Chapter_Videos/
├── src/
│   ├── __init__.py
│   ├── bible_api.py          # Bible text retrieval
│   ├── template_generator.py # Dynamic template creation
│   ├── video_processor.py    # JSON2Video API client
│   └── utils.py              # Helper functions
├── templates/
│   ├── base_template.json    # Base template structure
│   └── generated/            # Generated templates
├── data/
│   ├── bible_books.json      # Book/chapter metadata
│   └── processed/            # Chapter processing status
├── output/
│   └── videos/               # Downloaded videos
├── logs/
│   └── processing.log        # Process logs
└── tests/
    └── test_api.py           # API tests
```

### **Essential Dependencies:**
```bash
pip install requests python-dotenv tqdm
```

### **Environment Variables (.env):**
```bash
JSON2VIDEO_API_KEY=your-api-key-here
BIBLE_API_BASE=https://bible-api.com
LOG_LEVEL=INFO
```

---

## 🎯 **Success Criteria for Day 1**

By the end of today, you should have:

1. **✅ Working API connection** - Can create basic videos
2. **✅ Bible text pipeline** - Can retrieve any chapter
3. **✅ First test video** - Genesis 1 or similar
4. **✅ Processing workflow** - Understand the timing/flow
5. **✅ Next steps clarity** - Know what to build next

---

## 🚨 **Common Issues & Solutions**

### **API Key Issues:**
```python
# Test your API key
response = requests.get("https://api.json2video.com/v2/movies", 
                       headers={"x-api-key": "your-key"})
if response.status_code == 401:
    print("❌ Invalid API key")
```

### **Text Too Long Error:**
```python
# Keep voice text under 5,000 characters
if len(text) > 5000:
    text = text[:4900] + "..."
```

### **Video Processing Time:**
- Simple videos: 2-5 minutes
- Complex videos: 5-15 minutes  
- Be patient on first tests!

---

**🎉 Ready to start? Run the test script above and let's create your first Bible chapter video!** 