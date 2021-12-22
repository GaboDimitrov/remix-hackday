import { redirect, Form } from "remix";
import { createPost } from "~/post";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  await createPost({ title, slug, markdown });

  return redirect("/admin");
};


export default function NewPost() {
  return (
    <Form method="post">
      <p>
        <label>
          NESTED:
        </label>
      </p>
    </Form>
  );
}