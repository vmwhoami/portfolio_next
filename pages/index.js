import Link from 'next/link';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Portfolio } from '../components/Svgs';
import SocialLinks from '../components/smallComponents/SocialLinks';
import { getPortfolios } from "../redux/portfolios/portfolioActions";
export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPortfolios())
  }, [])
  return (
    <main className="main">
      <div className="main__container">
        <div className="image">
          <img
            alt="Vitalie Melnic"
            className="image__img"
            src="./pictures/portfolio.jpg"
          />
        </div>

        <div className="about">
          <div className="about__container">
            <p className="about__intro">Hi there! </p>

            <h1 className="about__heading">
              I'm
              <span className="about__name">Vitalie Melnic</span>
            </h1>

            <p className="about__description">
              I'm a Moldavian based developer focused on crafting clean &amp; user‑friendly experiences, I am
              passionate about building excellent software that improves the lives of those around me.
            </p>

            <Link href="/portfolio">
              <a className="mybutton">
                <span className="mybutton__span">Portfolio</span>

                <i className="mybutton__icon">
                  <Portfolio />
                </i>
              </a>
            </Link>

            <SocialLinks />
          </div>
        </div>
      </div>

    </main>
  );
}
