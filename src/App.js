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
