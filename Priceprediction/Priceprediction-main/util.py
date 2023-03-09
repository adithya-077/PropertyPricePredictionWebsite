import json
import pickle
import numpy as np

__location =None
__data_columns =None
__model = None

def get_location_names():
	load_save_files()
	return __location


def find_price(size,total_sqft,loc,bath):
    load_save_files()
    location_indx = __data_columns.index(loc.lower())
    predict_x = np.zeros(len(__data_columns))
    predict_x[0] = size
    predict_x[1] = total_sqft
    predict_x[2] = bath
    if location_indx >= 0:
        predict_x[location_indx]=1


    return round(__model.predict([predict_x])[0],2)
    


def load_save_files():
	global __data_columns
	global __location

	print('in')
	with open('./columns.json','r') as f:
		__data_columns = json.load(f)['dataColumn']
		__location = __data_columns[3:]

	global __model

	with open("./realestate_price_prediction.pickle",'rb') as f:
		__model = pickle.load(f)


if (__name__=='__main__'):
	print()
	print(find_price(2,1000,'1st Phase JP Nagar',2))