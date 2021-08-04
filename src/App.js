import React, { useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import LinkIcon from '@material-ui/icons/Link';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
      const loadAll = async () => {
        let list = await Tmdb.getHomeList();
        //setMovieList(list);

        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen= Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        //setFeaturedData(chosenInfo);

        console.log(chosenInfo);
      }

      loadAll();
    }, []);

    useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 40) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
      }

      window.addEventListener('scroll', scrollListener);
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }

    }, []);

    return (
      <div className="page">

        <Header black={blackHeader} />

        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }

        <section className="lists">
          {movieList.map((item,key) => (
            <MovieRow key = {key} title = {item.title} items = {item.items} />
          ))}
        </section>

        <footer>
          Feito com <span role="img">❤️</span> por Iury Farias<br/>
          Fonte de dados <a target="_blank" href="https://www.themoviedb.org">TMDb</a><br/>
          Direitos de imagem <a target="_blank" href="https://www.netflix.com"> Netflix, Inc.</a>
        </footer>

        <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Carregando"></img>
        </div>
      </div>
    );
  }