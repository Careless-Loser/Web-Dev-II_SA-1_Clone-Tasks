# Working with Images in HTML5

## Overview
This project demonstrates how to insert and manage images within an HTML5 webpage, utilizing the img, figure, and figcaption tags.

## Key Concepts and Elements

Every HTML document begins with DOCTYPE html, which defines the document type as HTML5. The document itself is enclosed within the html tags and is divided into two primary sections:

---

- **Head Section**: Contains metadata like the title of the webpage.

---

- **Body Section**: Contains the visible content of the webpage, such as text, images, and figures.

---

- **img**: tag is used to insert images into the webpage. This tag is self-closing and uses the following important attributes:
- **src**: Specifies the URL or file path to the image.
- **alt**: Provides alternative text for the image, which is displayed if the image fails to load or for screen readers to aid visually impaired users.
- **width**: Defines the width of the image in pixels.
**Example**:

<img src="image.jpg" alt="An amazing picture" width="500">
The <figure> and <figcaption> Tags
The <figure> tag is used to wrap an image and its caption, creating a semantic grouping for the content. The <figcaption> tag is used inside the <figure> element to provide a caption that describes the image.

**Example**:

<figure>
    <img src="image.jpg" alt="An amazing picture" width="500">
    <figcaption>This is my amazing picture.</figcaption>
</figure>

---

## HTML Example

<!DOCTYPE html>
<html>
<head>
    <title>Working with Images in HTML5</title>
</head>
<body>
    <figure>
        <img src="image.jpg" alt="An amazing picture" width="500">
        <figcaption>This is my amazing picture.</figcaption>
    </figure>
</body>
</html>

---

## To-Do

- **Create an HTML File**: Create a new HTML file named index.html.

- **Add HTML Boilerplate**: Write the basic structure of the HTML document:

Start with DOCTYPE html.
Include the html, head, and body tags.
Add a title to the webpage using the title tag inside the head.

- **Insert an Image**:
Use the img tag to add an image. Be sure to:

Provide the correct file path or URL in the src attribute.
Include descriptive text in the alt attribute for accessibility.
Set a specific width using the width attribute.

- **Add a Caption**:
Surround the img tag with a figure tag and use a figcaption tag to add a caption for the image.

## Scoring Criteria

- **Correctness of HTML Syntax**: 5/10
Ensure that all HTML tags are correctly opened and closed, and the structure of the document is valid.

- **Use of HTML Tags and Attributes as per Instructions**: 3/10
Ensure that the image is correctly inserted with the required src, alt, and width attributes, and that the caption is implemented using the figure and figcaption tags.

## Conclusion
This project illustrates the use of HTML5 to effectively work with images, providing essential details such as alternative text for accessibility, defining image size for layout consistency, and adding captions to images. By following the steps outlined, you will create a visually structured and accessible webpage, with all necessary image attributes in place for a clean and user-friendly design.

