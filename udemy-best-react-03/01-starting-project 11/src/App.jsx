import { useRef, useState, useEffect, useCallback } from 'react'

import Places from './components/Places.jsx'
import { AVAILABLE_PLACES } from './data.js'
import Modal from './components/Modal.jsx'
import DeleteConfirmation from './components/DeleteConfirmation.jsx'
import logoImg from './assets/logo.png'
import { sortPlacesByDistance } from "./loc.js"

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
const storedPlaces = storedIds.map(id => AVAILABLE_PLACES.find(place => place.id === id))

const App = () => {

  const selectedPlace = useRef()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces)

  useEffect(() => {
    // 현재위치
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      )

      setAvailablePlaces(sortedPlaces)
    })
  }, [])

  const handleStartRemovePlace = (id) => {
    setModalIsOpen(true)
    selectedPlace.current = id
  }

  const handleStopRemovePlace = () => {
    setModalIsOpen(false)
  }

  const handleSelectPlace = (id) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id)

      return [place, ...prevPickedPlaces]
    })

    if (storedIds.indexOf((id) === -1)) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]))
    }
  }

  // 함수 재생성 방지
  const handleRemovePlace = useCallback(() => {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      )
      setModalIsOpen(false)
  
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify(storedIds.filter(id => id !== selectedPlace.current))
      )
    }, []
  )


  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={'Sorting places by distance...'}
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  )
}

export default App
