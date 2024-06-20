import useHttp from '../hooks/useHttp.js'
import MealItem from './MealItem'
import Error from './UI/Error.jsx'

const requestConfig = {}

const Meals = () => {
	const {
		data: loadedMeals, 
		isLoading, 
		error
	} = useHttp('http://localhost:3000/meals', requestConfig, [])

	if (isLoading) {
		return (
			<div className="loading-text text-center">
				<span>🥞&nbsp;</span>
				<span>🍟&nbsp;</span>
				<span>🍔&nbsp;</span>
				<span>음</span>
				<span>식&nbsp;&nbsp;</span>
				<span>불</span>
				<span>러</span>
				<span>오</span>
				<span>는</span>
				<span>중&nbsp;</span>
				<span>🍩&nbsp;</span>
				<span>🍦&nbsp;</span>
				<span>🍮&nbsp;</span>
			</div>
		)
	}

	if (error) {
		return (
			<Error title="🛵음식 배달 중 사고가 났어요🚗" message={error} />
		)
	}

	return (
		<ul id='meals'>
			{loadedMeals.map(meal => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	)
}

export default Meals