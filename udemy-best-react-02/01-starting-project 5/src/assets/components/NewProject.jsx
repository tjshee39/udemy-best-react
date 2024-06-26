import { useRef } from 'react'

import Input from './input.jsx'
import Modal from './Modal.jsx'

const NewProject = ({onAdd, onCancel}) => {
  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  const handleSave = () => {
    const enteredTitle = title.current.value
    const enteredDescriptoin = description.current.value
    const enteredDueDate = dueDate.current.value

    /* validation */
    if (
      enteredTitle.trim() === '' ||
      enteredDescriptoin.trim() === '' ||
      enteredDueDate.trim() === '') {
      // show the error modal
      modal.current.open()

      return
    }

    // to App => handleAddProject
    onAdd({
      title: enteredTitle,
      description: enteredDescriptoin,
      dueDate: enteredDueDate
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input type="text" ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
    )
}

export default NewProject