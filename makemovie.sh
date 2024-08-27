#!/bin/bash

ffmpeg -f image2 -i ./img/img_%05d.png -r 24 -vcodec libx264 -pix_fmt yuv420p output.mp4
