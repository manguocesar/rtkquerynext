import { AddList } from "../components/addList/AddList";

export default function VerifyPage() {
  return (
    <>
      <h1>AddList page</h1>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
      <AddList />
    </>
  );
}
