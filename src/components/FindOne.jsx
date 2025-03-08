import { useLoaderData } from 'react-router'

const FindOne = () => {
    const data = useLoaderData()
    console.log('🚀 ~ FindOne ~ data:', data)
    return (
        <div>
            {data.name}
            <br />
            {data.email}
            <img src={data.photo} alt="" />
        </div>
    )
}

export default FindOne
