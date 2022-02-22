import * as S from './styled'

export default function CardProduct() {



    return (
        <S.Principaldiv className="w-3/12 h-4/6 p-5 bg-gray-900" layoutId="hello1" 
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}>
            <S.Circle className='z-10' />
            <S.Divworld className='h-full w-full flex flex-col  z-50 text-gray-50'>
                <S.Divworld className='w-full h-5/6 flex justify-center items-center'>
                    <S.Span className='text-7xl z-50 '>Nike Air</S.Span>
                </S.Divworld>
                <S.Divworld className='w-full h-2/6 flex flex-col'>
                    <S.Divworld >
                        <S.Span className='text-xs m-1'> Nike </S.Span>
                        <S.Tenis  src='air-jordan-transparent.png'/>
                    </S.Divworld>
                    <S.Divworld className='flex justify-between  m-1'>
                        <S.Span className=''> Air jordan 1 mid se gc  </S.Span>
                        <S.Span> R$ 899,00 </S.Span>
                    </S.Divworld>
                    <S.Divworld className='flex justify-between  m-1'>
                        <S.Span className=''> Your next shoes  </S.Span>
                        <S.ButtonBuy> Buy </S.ButtonBuy>
                    </S.Divworld>
                    <S.Divworld className='flex justify-center items-center mt-3'>
                     <S.ImgLogo  src={'nike-logo.png'} />
                    </S.Divworld>
                </S.Divworld>
            </S.Divworld>
        </S.Principaldiv>
    )
}
