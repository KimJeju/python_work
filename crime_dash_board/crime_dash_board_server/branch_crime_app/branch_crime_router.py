from fastapi import APIRouter

# 사용자 정의모듈 임포트 에러로 경로명 수동 지정
import sys
sys.path.append('/Users/kimkunhwi/Documents/Projects/python_work/crime_dash_board/crime_dash_board_server/branch_crime_app')

# 사용자 정의 모듈
import branch_crime_util 

router = APIRouter(
    prefix="/crime_branch",
    tags=["crime_branch"]
)

@router.get("/")
def default_crime_branch():
    default_crime_data = branch_crime_util.get_default_crime_branch_data()
    return default_crime_data