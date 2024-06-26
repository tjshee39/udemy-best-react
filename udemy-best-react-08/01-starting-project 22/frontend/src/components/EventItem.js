import { Link, useSubmit } from 'react-router-dom'
import classes from '../css/EventItem.module.css'

const EventItem = ({ event }) => {
  const submit = useSubmit()

  const startDeleteHandler = () => {
    const proceed = window.confirm('삭제하시겠습니까?')

    if (proceed) {
      submit(null, {method: 'delete'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to='edit'>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  )
}

export default EventItem
