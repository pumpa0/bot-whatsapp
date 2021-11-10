echo "Please wait, Installing curl..."
sudo apt-get install curl -y
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
echo "Please wait, Installing ffmpeg..."
sudo apt-get install ffmpeg -y
echo "Please wait, Installing webp..."
sudo apt-get install webp -y
echo "Please wait, Installing imagemagick..."
sudo apt-get install imagemagick -y
echo "Please wait, Installing nodejs..."
sudo apt-get install nodejs -y
echo "Please wait, Installing tesseract-ocr..."
sudo apt-get install tesseract-ocr -y
echo "Please wait, Installing node_modules..."
npm install
echo "installing finished..."
