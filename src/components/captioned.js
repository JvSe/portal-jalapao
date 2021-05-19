import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from '../../node_modules/react-awesome-slider/src/core/styles.scss';
import CaptionedStyles from '../../node_modules/react-awesome-slider/src/hoc/captioned-images/styles.scss';


import { shadeRGBColor, transitionEnd } from './helpers';

function transitionStart(slider) {
    if (typeof window === 'undefined') {
      return;
    }
    const divs = slider.nextSlide.querySelectorAll('div');
    const color = getComputedStyle(divs[0]).backgroundColor;
    const captionColor = shadeRGBColor(color, -0.2)
      .replace('rgb', 'rgba')
      .replace(')', ', 0.75)');
    const duration =
      parseInt(
        getComputedStyle(slider.element)
          .getPropertyValue('--slider-transition-duration')
          .trim()
          .replace('ms', ''),
        10
      ) - 75;
  
    window.transitionUpdateTimer = setTimeout(() => {
      slider.element.style.setProperty(
        '--organic-arrow-color',
        shadeRGBColor(color, -0.15)
      );
      slider.element.style.setProperty(
        '--control-bullet-active-color',
        shadeRGBColor(color, -0.15)
      );
      slider.element.style.setProperty(
        '--caption-background-color',
        captionColor
      );
      slider.element.style.setProperty('--control-bullet-color', color);
    }, duration);
  }

function Component(props) {
    return (
        <AwesomeSlider
            cssModule={[CaptionedStyles, AwsSliderStyles]}
            screens={props.media}
            onTransitionStart={transitionStart}
            infinite
            bullets
        />
    );
  }

export default Component;