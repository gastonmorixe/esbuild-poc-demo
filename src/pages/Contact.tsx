import { Button, Badge } from "../components"

export const Page = () => (
  <div>
    <h1>
      Contact <Badge>19</Badge>
    </h1>
    <p>This is a contact page example random text in spanish hola mundo</p>
    <section>
      <form>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="message" />
        <Button>Submit</Button>
      </form>
    </section>
  </div>
)
