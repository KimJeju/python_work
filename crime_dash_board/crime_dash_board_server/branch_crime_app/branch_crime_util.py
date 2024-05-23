import pandas as pd;

def get_default_crime_branch_data():
    
    category = ['average','main', 'sub']
    dict_data = {}
    
    try:
        for i in range(0,2):
            csv_data = pd.read_csv(f'./templates/crime_data/branch/2024/category/{category[i]}/crime_report_branch_1_2024_{category[i]}_category.csv')

            df = pd.DataFrame(csv_data)
            df = df.transpose()
            df.rename(columns=df.iloc[0], inplace=True)
            df = df.drop(df.index[0])
            
            print(i)    
            
            dict_data[category[i]] = df
        
        return dict_data        
    except Exception:
        print(Exception)
