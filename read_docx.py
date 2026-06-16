import zipfile
import re

docx_file = 'Ringkasan Konten CV ATS dengan Link - V2.docx'

with zipfile.ZipFile(docx_file) as z:
    doc = z.read('word/document.xml').decode('utf-8')
    rels = z.read('word/_rels/document.xml.rels').decode('utf-8')

rels_dict = {}
for match in re.finditer(r'<Relationship Id="([^"]+)" Type="[^"]*hyperlink" Target="([^"]+)"', rels):
    rels_dict[match.group(1)] = match.group(2)

for p in doc.split('</w:p>'):
    text = re.sub(r'<[^>]+>', '', p).strip()
    
    links = []
    for h_match in re.finditer(r'<w:hyperlink r:id="([^"]+)"', p):
        if h_match.group(1) in rels_dict:
            links.append(rels_dict[h_match.group(1)])
            
    if text:
        print(text)
        if links:
            print("  LINK:", links[0])
