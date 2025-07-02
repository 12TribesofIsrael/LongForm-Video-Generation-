# 🧪 Bible Chapter Video - Testing Strategy

## 🎯 **Current Milestone: Biblical Prompt Enhancement**

**What to Test:** Enhanced biblical prompt generates appropriate content

---

## 📋 **Test Phase 1.2: Biblical Content Prompt**

### **🔍 Test 1: Perplexity Prompt Validation**

**Goal:** Verify our enhanced biblical prompt generates appropriate content

**Test Method:** Direct API call to Perplexity with sample Bible text

#### **Quick Perplexity Test Script:**
```python
import requests
import json

# Test the enhanced biblical prompt
def test_biblical_prompt():
    API_KEY = "your-perplexity-api-key"
    
    # Sample Genesis 1:1-5 (short test)
    test_text = """In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day."""
    
    prompt = f"""You are a Biblical storytelling and video production expert. Create a script for a long-form video that narrates the Bible chapter content provided: "{test_text}".

Break the Bible content into 5 distinct scenes that facilitate the creation of engaging biblical video content. For each scene, both the overlaid text and the voice-over text should capture the essence of that portion of the biblical narrative.

The overlaid text should be concise, impactful biblical phrases (3-8 words) that highlight the key spiritual message of each scene and will appear as text overlay on the video. The voice-over text should be detailed, reverent narration (20+ words) that elaborates on the biblical scene's content with appropriate spiritual tone.

Your output must be in JSON format following this exact schema:

{{
  "scenes": [
    {{
      "overlaidText": "Concise biblical overlay text (3-8 words)",
      "voiceOverText": "Detailed reverent narration for the biblical scene (20+ words minimum)",
      "imagePrompt": "Detailed visual description for biblical scene with appropriate religious imagery"
    }}
  ]
}}

IMPORTANT GUIDELINES:
- Create exactly 5 scenes that flow chronologically through the Bible chapter
- The overlaidText should reflect biblical themes, not generic titles
- ImagePrompts should be reverent, appropriate biblical visuals (avoid depicting God directly)
- VoiceOverText should maintain a respectful, educational tone suitable for biblical content
- Focus on the spiritual and historical significance of the passage

Return ONLY the JSON, no other text."""

    payload = {
        "model": "llama-3.1-sonar-large-128k-online",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 1200,
        "temperature": 0.6
    }
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(
        "https://api.perplexity.ai/chat/completions", 
        json=payload, 
        headers=headers
    )
    
    if response.status_code == 200:
        result = response.json()
        content = result['choices'][0]['message']['content']
        print("✅ Perplexity Response:")
        print(content)
        
        # Try to parse JSON
        try:
            scenes_data = json.loads(content)
            print("\n✅ JSON Parsing: SUCCESS")
            print(f"Number of scenes: {len(scenes_data.get('scenes', []))}")
            return scenes_data
        except json.JSONDecodeError as e:
            print(f"\n❌ JSON Parsing Failed: {e}")
            return None
    else:
        print(f"❌ API Error: {response.status_code} - {response.text}")
        return None

# Run the test
if __name__ == "__main__":
    test_biblical_prompt()
```

#### **Expected Results:**
✅ **Good Output Should Have:**
- Exactly 5 scenes
- Biblical language in overlaidText (3-8 words)
- Reverent tone in voiceOverText (20+ words)
- Appropriate biblical imagery prompts
- Chronological flow through Genesis creation

❌ **Red Flags:**
- Generic/secular language
- Inappropriate imagery descriptions
- Non-biblical themes
- Wrong number of scenes

---

### **🔍 Test 2: n8n Workflow Import Test**

**Goal:** Verify the workflow can be imported and runs in n8n

#### **Test Steps:**
1. **Import Workflow:**
   - Open n8n interface
   - Import `BibleChapterMaster.json`
   - Check for any import errors

2. **Credential Check:**
   - Verify Perplexity API credentials
   - Verify JSON2Video API credentials
   - Test API connections

3. **Manual Trigger Test:**
   - Set input text to Genesis 1:1-5
   - Run "Start Workflow" manually
   - Monitor each node execution

#### **Expected Results:**
✅ **Success Indicators:**
- Workflow imports without errors
- All credentials connect successfully
- Perplexity node returns biblical JSON
- No execution errors

❌ **Failure Points:**
- Import errors (fix JSON syntax)
- Credential failures (check API keys)
- Prompt parsing errors (adjust prompt)

---

### **🔍 Test 3: Content Quality Validation**

**Goal:** Ensure biblical content meets quality standards

#### **Test Criteria:**

**Overlaid Text Quality:**
- [ ] 3-8 words per overlay
- [ ] Biblical/spiritual language
- [ ] Key message capture
- [ ] Appropriate reverence

**Voice-Over Quality:**
- [ ] 20+ words minimum
- [ ] Respectful, educational tone
- [ ] Spiritual significance mentioned
- [ ] Clear narration flow

**Image Prompt Quality:**
- [ ] Biblically appropriate visuals
- [ ] No direct God depictions
- [ ] Historical/spiritual context
- [ ] Professional descriptions

#### **Sample Quality Check:**
```
GOOD EXAMPLE:
{
  "overlaidText": "In the Beginning",
  "voiceOverText": "Before time began, the Almighty God spoke creation into existence, demonstrating His infinite power and sovereign authority over all things.",
  "imagePrompt": "A cosmic void with swirling darkness and emerging light, depicting the primordial state before creation"
}

BAD EXAMPLE:
{
  "overlaidText": "Starting the video series",
  "voiceOverText": "This is the first part of our content.",
  "imagePrompt": "Generic background image"
}
```

---

## 🧪 **Recommended Testing Order**

### **Phase 1: Standalone Tests (30 minutes)**
1. **Quick Perplexity Test** (10 min)
   - Run Python script above
   - Validate JSON output format
   - Check content quality

2. **API Credential Verification** (10 min)
   - Test Perplexity API key
   - Test JSON2Video API key
   - Verify response formats

3. **Content Review** (10 min)
   - Validate biblical appropriateness
   - Check tone and language
   - Ensure reverent imagery

### **Phase 2: Integration Tests (20 minutes)**
1. **n8n Workflow Import** (10 min)
   - Import BibleChapterMaster.json
   - Check node connections
   - Verify credentials

2. **End-to-End Test** (10 min)
   - Run workflow with Genesis sample
   - Monitor execution flow
   - Capture final output

---

## 📊 **Test Results Template**

### **Test 1 Results: Perplexity Prompt**
- [ ] ✅ API Call Successful
- [ ] ✅ JSON Format Valid
- [ ] ✅ 5 Scenes Generated
- [ ] ✅ Biblical Language Used
- [ ] ✅ Reverent Tone Maintained
- [ ] ✅ Appropriate Imagery

**Notes:** _Record any issues or observations_

### **Test 2 Results: n8n Integration**
- [ ] ✅ Workflow Imported Successfully
- [ ] ✅ Credentials Connected
- [ ] ✅ Nodes Execute Without Errors
- [ ] ✅ Data Flows Correctly

**Notes:** _Record any integration issues_

### **Test 3 Results: Content Quality**
- [ ] ✅ Overlay Text Quality Acceptable
- [ ] ✅ Voice-Over Text Appropriate
- [ ] ✅ Image Prompts Biblically Sound
- [ ] ✅ Overall Flow Makes Sense

**Notes:** _Record quality assessment_

---

## 🚀 **Next Steps Based on Test Results**

### **If All Tests Pass ✅**
- Proceed to Task 1.3: Template Adjustments
- Begin biblical template styling
- Test with longer Bible passages

### **If Tests Fail ❌**
- **Prompt Issues:** Refine biblical language
- **API Issues:** Check credentials/endpoints
- **Quality Issues:** Adjust prompt guidelines
- **Integration Issues:** Fix workflow configuration

---

## 🛠️ **Quick Test Commands**

### **Test Perplexity API:**
```bash
# Create test script
cd Bible_Chapter_Videos
echo 'import requests; print("Testing Perplexity API...")' > test_perplexity.py
```

### **Test n8n Import:**
```
1. Open n8n (http://localhost:5678)
2. Click "+" → "Import from file"
3. Select BibleChapterMaster.json
4. Check for import success
```

---

**🎯 Ready to run Test 1 (Perplexity Prompt Test)?**

**Which test would you like to start with?** 