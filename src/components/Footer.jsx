import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='foter'>
        <div className='container'>
          <div className='fot-grid'>
            <div className='fots'>
              <img src='./logo.png' alt='' />
              <p>
                Claims Market is a platform dedicated to simplifying the market
                for trade claims. Our goal is to bring together Sellers and
                Buyers of claims through a transparent marketplace that reduces
                transaction costs.
              </p>
              <div className='fot-icon'>
                <img src='./in.png' alt='' />
                <img src='./you.png' alt='' />
              </div>
            </div>
            <div className='onlyP'>
              <p>How it Works</p>
              <p>SAC (Simple Assignment of Claim)</p>
              <p>Seller's Agreement</p>
              <p>Buyer's Agreement</p>
            </div>
            <div className='onlyP'>
              <div className='top'>
                <p>Claims Offered</p>
                <p>Transactions </p>
                <p>FAQ </p>
                <p> SPTA (Simple Pass Through)</p>
                <p>Assignment)</p>
                <p>Legal </p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className='link'>
            <p>© 2023 Cherokee Hybrid Markets, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
