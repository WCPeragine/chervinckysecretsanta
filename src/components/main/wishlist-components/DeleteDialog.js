import React from "react";

function DeleteDialog(props) {
  const { onDeleteDialogResponse, currentItemName } = props;
  const question = `Are you sure you want to delete ${String(
    currentItemName
  )}?`;
  return (
    <div id="deleteDialog">
      <div id="deleteDialogTop" />
      <div id="deleteDialogBottom"> </div>
      <div id="deleteDialogLeft" />
      <div id="deleteDialogRight" />
      <div id="deleteQuestion">{String(question)}</div>
      <input
        id="deleteDialogBtn"
        type="button"
        value="Delete"
        onClick={onDeleteDialogResponse}
      />
      <input
        id="cancelDialogBtn"
        type="button"
        value="Cancel"
        onClick={onDeleteDialogResponse}
      />
    </div>
  );
}

export default DeleteDialog;
