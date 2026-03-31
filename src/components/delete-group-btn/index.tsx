"use client";

import { deleteGroup } from "@/app/actions/delete-group";

interface Props {
  id: number;
}

export default function DeleteGroupBtn({ id }: Props) {
  return (
    <button
      className="cursor-pointer"
      type="button"
      onClick={() => deleteGroup(id)}
    >
      Delete
    </button>
  );
}
