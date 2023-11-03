import React, { useState } from 'react';
import { useDeleteUserMutation, useUpdateUserMutation } from '../../store/api/usersApi';

const UserItem = ({ user }) => {
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ firstName: user.firstName, lastName: user.lastName });

  const handleDelete = async () => {
    try {
        console.log("Delete button clicked for user:", user.id); 
      await deleteUser({userId: user.id});
      console.log("User deleted:", user.id);  // Log when the user is deleted

      // Handle successful delete if necessary (e.g., show a notification)
    } catch (error) {
      console.error("Error deleting user:", error);  // Log any error that happens during deletion
    }
  };

  const handleUpdate = async () => {
    try {
      await updateUser({ userId: user.id, user: editedUser });
      console.log("User updated:", user.id);  // Log when the user is updated

      setIsEditing(false);
      // Handle successful update if necessary
    } catch (error) {
      console.error("Error updating user:", error);  // Log any error that happens during updating
    }
  };

  if (isEditing) {
    return (
      <li>
        <input className="inputValue"
          value={editedUser.firstName} 
          onChange={e => setEditedUser(prev => ({ ...prev, firstName: e.target.value }))}
        />
        <input className="inputValue"
          value={editedUser.lastName} 
          onChange={e => setEditedUser(prev => ({ ...prev, lastName: e.target.value }))}
        />
        <button className="TabButton" onClick={handleUpdate}>Spara</button>
        <button className="TabButton" onClick={() => setIsEditing(false)}>Redigera</button>
      </li>
    );
  }

  return (
    <li>
      {user.firstName} {user.lastName}
      <button className="TabButton" onClick={() => setIsEditing(true)}>Redigera</button>
      <button className="TabButton" onClick={handleDelete}>Ta bort</button>
    </li>
  );
};

export default UserItem;
