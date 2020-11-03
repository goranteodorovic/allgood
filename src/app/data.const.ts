import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

declare var require: any;

export const HERO_LIST = [
    {
        icon: faHandHoldingUsd,
        text: "Turn your stuff into cach donations",
        color: "green"
    },
    {
        icon: faMobile,
        text: "Shop allgood market - and support charity",
        color: "purple"
    },
    {
        icon: faHeart,
        text: "A new way to fund raise",
        color: "red"
    }
]

export const ABOUT_US = [
    {
        iconBefore: "arrow.png",
        icon: "icon-gray.png",
        title: "Post an item",
        text: "Lorem ipsum dolor sit",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "icon-gold.png",
        title: "Select an Organization",
        text: "Lorem ipsum dolor sit",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "icon-green.png",
        title: "Buyer Makes the Payment",
        text: "Lorem ipsum dolor sit",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "icon-purple.png",
        title: "Post an Item",
        text: "Lorem ipsum dolor sit",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "heart.png",
        title: "Donate",
        text: "Lorem ipsum dolor sit",
        iconAfter: "",
        watchVideo: true
    }
]

export const IMAGE_TEXT = {
    title: "Post an item for sale",
    text: "To post an item for sale - please register<br/>or sign in if you're already registered with allgood.",
    image: "",
    buttons: [{
        class: "btn btn-red",
        text: "Sign Up"
    }, {
        class: "btn btn-transparent",
        text: "Sign In"
    }]
}