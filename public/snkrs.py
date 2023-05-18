from PIL import Image
import requests
from io import BytesIO

# Get the image links and desired filenames from the user
image_links = []
num_images = int(input("Enter the number of images: "))
filename = input("Enter the desired filename (without extension): ")

for i in range(num_images):
    image_links.append(input(f"Enter the link for image {i + 1}: "))

for i in range(num_images):
    # Fetch the image from the URL
    response = requests.get(image_links[i])
    img = Image.open(BytesIO(response.content))

    # Calculate the new aspect ratio
    aspect_ratio = img.width/img.height

    # Create a new image with the desired size and background color
    background = Image.new('RGB', (864, 1080), (246, 246, 246))

    if aspect_ratio > 864/1080:
        new_height = int(864/aspect_ratio)
        img = img.resize((864, new_height))
        background.paste(img, (0, int((1080 - new_height) / 2) - 36))
    else:
        new_width = int(1080*aspect_ratio)
        img = img.resize((new_width, 1080))
        background.paste(img, (int((864 - new_width) / 2), - 36))

    # Save the new image with the desired filename
    if i == 0:
        background.save(f"{filename}.png")
    else:
        background.save(f"{filename}{i + 1}.png")
