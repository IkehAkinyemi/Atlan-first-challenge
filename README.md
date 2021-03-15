# Atlan-first-challenge

## Search the IPL

This task involved the implementation of a Search and Filter facets UI/UX aspects to get data or search result. Simply the steps users go through to get the right data/information through the concept of filtering unwanted data out.

## UX Thought Process

The main aim is to make this process of filtering less tedious on the users side. And also the steps involved should be intuitive to the users on filtering search result, to get the right information needed. 

I applied the concept of making choices through the checkbox selection. The data involved or searched through, have common distinctions or groups. The result returned after the checkbox selection contains information only in the groups selected.
The selected groups determines the search result returned according to the user choices on the checkboxes.

## Page Load Time

The page load time was calculated from 5 different load trials then the avarage value, the mean value, was obtained from the trial sample. The mean value for the page load time after calculation is *1.18seconds*

## Optimization Process

Employed the use of conditional rendering in React, this help load components when necessary to the user. Rendered the image used in the project through external link. The icons used are in SVG format, a very lightweight format for image file.