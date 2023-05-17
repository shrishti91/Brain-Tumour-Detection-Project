import cv2
from PIL import Image
import pickle
import os
import numpy as np
from keras.models import load_model
model=load_model('model2.h5')

img=cv2.imread('data/pred/pred2.jpg')
img=Image.fromarray(img)
img=img.resize((64,64))
img=np.array(img)
img=np.expand_dims(img,axis=0)
print(np.argmax(model.predict(img),axis=1))
# print(model.accuracy())

# print(img)
# print(model.predict(img))