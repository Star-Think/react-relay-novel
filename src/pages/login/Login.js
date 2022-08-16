import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import axios from 'axios';

function Login() {
	const postLogin = async (id, pwd) => {
		await axios({
			method: 'post',
			url: 'http://star-think.ddns.net:1722/api/login',
			data: {
				user_id: id,
				password: pwd,
			},
		})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access_token);
				alert('로그인에 성공하였습니다.');
			})
			.catch((err) => {
				console.log(err);
				alert('아이디 또는 비밀번호를 확인하세요');
			});

		//console.log(result);
	};

	return (
		<>
			<Header />
			<table className='flex justify-center flex-wrap'>
				<thead className='w-full flex justify-center  mb-10'>
					<tr className='mt-48'>
						<th colSpan='2'>Login</th>
					</tr>
				</thead>
				<tbody>
					<tr className='w-full flex justify-center flex-wrap'>
						<td className='w-full flex justify-center'>
							<label htmlFor='id' className='text-center w-1/6'>
								ID
							</label>
							<input
								type='text'
								placeholder='아이디를 입력하세요'
								className='mb-5 ml-10 p-1.5'
							/>
						</td>
						<td className='w-full flex justify-center'>
							<label htmlFor='pwd' className='text-right w-1/6'>
								PASSWORD
							</label>
							<input
								type='password'
								placeholder='비밀번호를 입력하세요'
								className='mb-5 ml-10 p-1.5'
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<div className='w-full flex justify-center mt-10'>
				<button
					className='mr-10 hover:bg-yellow-300 px-2 py-1.5 rounded-md'
					onClick={() => postLogin('qaws', '1234')}>
					로그인
				</button>
				<button className='hover:bg-yellow-300 px-2 py-1.5 rounded-md'>
					회원가입하기
				</button>
			</div>
			<Footer />
		</>
	);
}

export default Login;
