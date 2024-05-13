import IndexGenres from "./genres/IndexGenres";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";

import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";

import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import MovieDetails from './movies/MovieDetails';

import LandingPage from "./movies/LandingPage";
import RedirectToLandingPage from './utils/RedirectToLandingPage';

import Register from './auth/Register';
import Login from './auth/Login';
import IndexUsers from './auth/IndexUsers';
import CreateShteti from "./lab1/shtetet/CreateShteti";
import EditShteti from "./lab1/shtetet/EditShteti";
import IndexShtetet from "./lab1/shtetet/IndexShtetet";
import CreateStudenti from "./lab1/studentet/CreateStudenti";
import EditStudenti from "./lab1/studentet/EditStudenti";
import IndexStudentet from "./lab1/studentet/IndexStudentet";
import IndexNdertesat202152581 from "./lab1/ndertesat202152581/IndexNdertesat202152581";
import CreateNdertesa202152581 from "./lab1/ndertesat202152581/CreateNdertesa202152581";
import EditNdertesa202152581 from "./lab1/ndertesat202152581/EditNdertesa202152581";
import IndexLiftet202152581 from "./lab1/liftet202152581/IndexLiftet202152581";
import CreateLifti202152581 from "./lab1/liftet202152581/CreateLifti202152581";
import EditLifti202152581 from "./lab1/liftet202152581/EditLifti202152581";
import IndexPlanetet from "./lab1/planets/IndexPlanetet";
import CreatePlaneti from "./lab1/planets/CreatePlaneti";
import EditPlaneti from "./lab1/planets/EditPlaneti";
import CreateSatellite from "./lab1/satellites/CreateSatellite";
import EditSatellite from "./lab1/satellites/EditSatellite";
import IndexSatellites from "./lab1/satellites/IndexSatellites";
import IndexSculptors from "./lab1/sculptors/IndexSculptors";
import CreateSculptor from "./lab1/sculptors/CreateSculptor";
import EditSculptor from "./lab1/sculptors/EditSculptor";
import IndexSculptures from "./lab1/sculptures/IndexSculptures";
import CreateSculpture from "./lab1/sculptures/CreateSculpture";
import SculptureEdit from "./lab1/sculptures/EditSculpture";


const routes = [
    {path: '/genres', component: IndexGenres, exact: true, isAdmin: true},
    {path: '/genres/create', component: CreateGenre, isAdmin: true},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre, isAdmin: true},

    {path: '/actors', component: IndexActors, exact: true, isAdmin: true},
    {path: '/actors/create', component: CreateActor, isAdmin: true},
    {path: '/actors/edit/:id(\\d+)', component: EditActor, isAdmin: true},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true, isAdmin: true},
    {path: '/movietheaters/create', component: CreateMovieTheater, isAdmin: true},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater, isAdmin: true},


    {path: '/movies/create', component: CreateMovie, isAdmin: true},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie, isAdmin: true},
    {path: '/movies/filter', component: FilterMovies},
    {path: '/movie/:id(\\d+)', component: MovieDetails},

    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/users', component: IndexUsers, isAdmin: true},


    //LAB 1 Detyra

    //Detyra 1 Studenti - Shteti

    //Studenti routes
    {path: '/studentet', component: IndexStudentet, exact: true, isAdmin: true},
    {path: '/studentet/create', component: CreateStudenti, isAdmin: true},
    {path: '/studentet/edit/:id(\\d+)', component: EditStudenti, isAdmin: true},

    //Shteti routes
    {path: '/shtetet', component: IndexShtetet, exact: true, isAdmin: true},
    {path: '/shtetet/create', component: CreateShteti, isAdmin: true},
    {path: '/shtetet/edit/:id(\\d+)', component: EditShteti, isAdmin: true},

 //LAB 1 Detyra

    //Detyra 2 Lifti - Ndertesa

    //Ndertesa routes
    {path: '/ndertesat', component: IndexNdertesat202152581, exact: true, isAdmin: true},
    {path: '/ndertesat/create', component: CreateNdertesa202152581, isAdmin: true},
    {path: '/ndertesat/edit/:id(\\d+)', component: EditNdertesa202152581, isAdmin: true},

    //Lifti routes
    {path: '/liftet', component: IndexLiftet202152581, exact: true, isAdmin: true},
    {path: '/liftet/create', component: CreateLifti202152581, isAdmin: true},
    {path: '/liftet/edit/:id(\\d+)', component: EditLifti202152581, isAdmin: true},

    //LAB 1 Detyra

    //Detyra 3 Lifti - Ndertesa

    //Ndertesa routes
    {path: '/planets', component: IndexPlanetet, exact: true, isAdmin: true},
    {path: '/planets/create', component: CreatePlaneti, isAdmin: true},
    {path: '/planets/edit/:id(\\d+)', component: EditPlaneti, isAdmin: true},

    //Lifti routes
    {path: '/satellites', component: IndexSatellites, exact: true, isAdmin: true},
    {path: '/satellites/create', component: CreateSatellite, isAdmin: true},
    {path: '/satellites/edit/:id(\\d+)', component: EditSatellite, isAdmin: true},

     //LAB 1 Detyra

    //Detyra 4 Lifti - Ndertesa

    //Ndertesa routes
    {path: '/sculptors', component: IndexSculptors, exact: true, isAdmin: true},
    {path: '/sculptors/create', component: CreateSculptor, isAdmin: true},
    {path: '/sculptors/edit/:id(\\d+)', component: EditSculptor, isAdmin: true},

    //Lifti routes
    {path: '/sculptures', component: IndexSculptures, exact: true, isAdmin: true},
    {path: '/sculptures/create', component: CreateSculpture, isAdmin: true},
    {path: '/sculptures/edit/:id(\\d+)', component: SculptureEdit, isAdmin: true},







    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;