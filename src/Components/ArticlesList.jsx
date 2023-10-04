import { Typography } from '@material-tailwind/react'
import React, { Fragment } from 'react'
import { CustomCard } from './CustomCard'

export const ArticlesList = () => {
  return (
    <Fragment>
        <div className='my-12 mx-28'>
            <div>
                <Typography variant="h2" className="mb-5 text-black text-center">
                    Articles
                </Typography>
            </div>
            <div className='flex gap-5 flex-wrap'>
             
                    <CustomCard/>
       
                
            </div>

        </div>


    </Fragment>
  )
}
