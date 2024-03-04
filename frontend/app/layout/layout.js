import styles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className='flex h-screen '>
      <div className='m-auto bg-slate-50 rounded-md w-3/5 h-5/6 grid lg:grid-cols-2'>
        <div className={styles.imgStyle}>

          <h1 className="text-4xl text-white font-bold text-center mb-52 py-10">Why choose us?</h1>

          <div className={styles.cartoonImg1}>
            <h3 className="text-white mb-4 text-center py-96">
              <span className="block w-20 mx-auto mb-8"></span> 
              Secure Your Life
              <span className="block border-b-2 border-white w-20 mx-auto mb-4"></span> 
              We're dedicated to your safety, leveraging advanced AI and an active community to stay ahead of scams. Count on us for a secure experience.
            </h3>
          </div>

          <div className={styles.cartoonImg2}>
            <h3 className="text-white mb-4 text-center py-96">
                <span className="block w-20 mx-auto mb-8"></span> 
                Community Guard
                <span className="block border-b-2 border-white w-20 mx-auto mb-4"></span> 
                Become part of an active system that prevents scams together
            </h3>
          </div>

          <div className={styles.cartoonImg3} >
            <h3 className="text-white mb-4 text-center py-96">
                  <span className="block w-20 mx-auto mb-8"></span> 
                  Instant Scam Alerts
                  <span className="block border-b-2 border-white w-20 mx-auto mb-4"></span> 
                  With our dedication to truthfulness, stay updates on new scams. This Will enable you to make wise decisions and safeguard both yourself and other people.
            </h3>
          </div>

        </div>

        <div className='right flex flex-col justify-evenly'>
          <div className='text-center py-10'>
            {children}
          </div>
        </div>

      </div>

    </div>
  );
}
