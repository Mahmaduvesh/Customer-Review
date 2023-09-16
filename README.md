# Test Task By Knovator

🤩 Features
There should be two sections

- Give Review
- Reviews

## ⭐ Give Review

#### - It shows a form for the user to give a review.

#### - Form Includes two input ﬁelds,

```http
  - Title* ⇒ Title of the Review.
  - Rating* ⇒ Rating for the Review.
  - Description ⇒ Description of the Review.
```

#### - Form Includes two buttons,

```http
  - Submit ⇒ submit the review and clear the form.
  - Reset ⇒ reset the review and clear the form.
```

- Title* and Rating* are required ﬁelds.
- When a user submits the review, the review should be added to the Reviews section.

## ✨ Reviews

#### - Should show a list of reviews the user has added.

#### - List should show Title, Description & Rating that user has added.

## ✴ Plus Points

#### - You can add the Delete button on review.

#### - When a user clicks on the delete button review should be removed from list.

## Usage/Examples

```javascript
import { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState([]);

  const removeData = (removeIndexValue) => {
    console.log(removeIndexValue);

    const tempdata = formData.filter((value, index) => {
      if (removeIndexValue != index) {
        return value;
      }
    });

    setFormData(tempdata);
  };

  return (
    <Container>
      <Container className="mt-5">
        <h2 className="mb-3">Customer Review</h2>
        <Form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();

            var tempData = {
              title,
              rating,
              description,
            };

            // spread operator Before
            // const arr = [1,2,3];
            // const backuparr = [arr,4,5,6] => [[1,2,3],4,5,6]
            // const spreadarr = [...arr,4,5,6] => [1,2,3,4,5,6]
            setFormData([...formData, tempData]);

            setTitle("");
            setRating("");
            setDescription("");
          }}
        >
          <Form.Group className="mb-3" controlId="formtitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formratings">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter rating"
              required
              onChange={(e) => {
                setRating(e.target.value);
              }}
              value={rating}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              as="textarea"
              style={{ height: "100px" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>

          <Button variant="primary" type="reset">
            Reset
          </Button>
        </Form>
      </Container>

      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((value, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.rating}</td>
                  <td>{value.description}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeData(i)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default App;
```

## Task Screenshots

#### Basic Ui

![App Screenshot](/images/1.png)

#### Fill Form Data

![App Screenshot](/images/2.png)

#### After Submit

![App Screenshot](/images/3.png)

#### Added More Reviews

![App Screenshot](/images/4.png)

#### List Out All Reviews

![App Screenshot](/images/5.png)

#### Confirm Box With Delete Review

![App Screenshot](/images/8.png)

#### After Delete Reviews

![App Screenshot](/images/7.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Mahmaduvesh/Test-Task-By-Knovator.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🛠 Skills

HTML, CSS, Javascript, Bootstrap, React Js...

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mahmaduvesh-portfolio.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](http://www.linkedin.com/in/mahmaduvesh-khalifa-b48ba41a0)

# Thank You :)
