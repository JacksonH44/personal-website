import Image from 'next/image'

export default function SkillItem({imageUrl, description}) {
    return(
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image
                        src={imageUrl}
                        width='64'
                        height='64'
                        alt='/'
                        style={{
                        maxWidth: "100%",
                        height: "auto"
                        }} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
    
}
