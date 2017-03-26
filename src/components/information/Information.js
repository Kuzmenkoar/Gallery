import	React,	{	Component	}	from	'react'
import  './information.scss'

export	default	class	Info	extends	Component	{
    render()	{
        return <div className='info'>
            <figure className='info-figure'>
                <img className='info-figure__img' src={require('./image1.png')} alt='error'/>
            </figure>
            <h1 className='info__name'>Юрій Пацан</h1>
            <h2 className='info__rank'>Заслужений художник України</h2>
            <p className='info__text'>
                <b className='info_b'>Юрій Іванович Пацан</b> проживає в селищі Чабани Києво-Святошинського р-ну.
                Народився 11 грудня 1963 в селі Пархомівка Володарського району, Київської області.
                Закінчив Ірпінський індустріальний технікум. Працював токарем.
                Учасник ліквідації аварії ЧАЕС, ліквідатор 2-ї категорії. В 1999 потрапив в автомобільну катастрофу,
                отримав спинномозкову травму, став інвалідом І групи.
            </p>
            <p className='info__text'>
                З 2000 розпочинає художню практику — створив понад 800 картин.
                Персональні виставки відбулися в Національному музеї Т. Г. Шевченка, місто Київ,
                Фонді культури України, Будинку Уряду.
            </p>
            <p className='info__text'>
                Нагороджений орденом «За заслуги» ІІІ степені Президентом України В.А. Ющенком. Почесний громадянин»
                Києво-Святошинського району. 7 листопада 2014 року отримав звання «Заслужений художник України».
            </p>
        </div>
    }
}





