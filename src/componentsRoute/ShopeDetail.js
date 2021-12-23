import React,{useState, useEffect} from 'react'

function ShopeDetail({match}) {


    const [item, setItem] = useState({})

    useEffect(() => {
        
        const fetchItem = async() => {
            const fetchUrl = `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
            const data = await fetch(fetchUrl)
            const item = await data.json(data)
            console.log(item);
            setItem(item)
        }
    
        fetchItem()
        console.log(match);
        
        
    }, [])

    return (
        <div>
            <h1>show image</h1>
            <img src={item.url} alt="" />
        </div>
    )
}

export default ShopeDetail
