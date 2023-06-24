document.addEventListener('DOMContentLoaded', function () {
	const input = document.getElementById('email');
	const div_labels = document.getElementById('div-labels');
	const body = document.body;

	document.getElementById('submit').addEventListener('click', function (event) {
		event.preventDefault();
		const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!regex.test(input.value)) {
			div_labels.innerHTML = `
        <label for="email">Email address</label>
        <label for="email" class="error">Valid email required</label>
      `;
			input.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
			input.style.color = 'red';
			input.style.borderColor = 'red';
		} else {
			div_labels.innerHTML = `
        <label for="email">Email address</label>
      `;
			input.style.backgroundColor = '';
			input.style.color = '';
			input.style.borderColor = '';
			body.innerHTML = `
			<div id="container-success" class="container-success">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="45"
				height="45"
				viewBox="0 0 21 21"
			>
				<g fill="none">
					<circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
					<path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
				</g>
			</svg>
			<p class="title-success">Thanks for subscribing!</p>
			<p class="description-success">
				A confirmation email has been sent to <strong>${input.value}</strong>.
				Please open it and click the button inside to confirm your subscription.
			</p>

			<button id="dismiss-message">Dismiss message</button>
		</div>
			`;
		}
		document
			.getElementById('dismiss-message')
			.addEventListener('click', function (event) {
				location.reload();
				body.innerHTML = `
				<div class="container">
				<div class="div-left">
					<p class="title">Stay updated!</p>
					<p class="description">
						Join 60.000+ product managers receiving monthly updates on:
					</p>
	
					<p class="ponto-info">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="21"
							viewBox="0 0 21 21"
						>
							<g fill="none">
								<circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
								<path
									stroke="#FFF"
									stroke-width="2"
									d="M6 11.381 8.735 14 15 8"
								/>
							</g>
						</svg>
						Product discovery and building what matters
					</p>
					<p class="ponto-info">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="21"
							viewBox="0 0 21 21"
						>
							<g fill="none">
								<circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
								<path
									stroke="#FFF"
									stroke-width="2"
									d="M6 11.381 8.735 14 15 8"
								/>
							</g>
						</svg>
						Measuring to ensure updates are a success
					</p>
					<p class="ponto-info">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="21"
							viewBox="0 0 21 21"
						>
							<g fill="none">
								<circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
								<path
									stroke="#FFF"
									stroke-width="2"
									d="M6 11.381 8.735 14 15 8"
								/>
							</g>
						</svg>
						And much more!
					</p>
					<form action="" class="form">
						<div class="div-labels" id="div-labels">
							<label for="email">Email address</label>
						</div>
						<input
							class="input"
							id="email"
							type="email"
							placeholder="email@company.com"
						/>
						<button id="submit">Subscribe to monthly newsletter</button>
					</form>
				</div>
				<div class="div-right">
					<img
						src="./assets/images/illustration-sign-up-desktop.svg"
						width="80%"
					/>
				</div>
			</div>
				
				`;
			});
	});
});
