const datePicker = document.getElementById('date');
const textContainer = document.getElementById('counter');

let startDate = new Date(datePicker.value).getTime();

const loading = () => {
  textContainer.innerHTML = '<div class="flex flex-col text-center w-full text-center py-2"><span class="text-4xl">👩‍🔬</span> <span class="text-sm mt-3 text-slate-500">Calculating...</span></div>';
};

loading();

datePicker.addEventListener('change', e => {
  loading();
  startDate = new Date(e.target.value).getTime();
});

const updateTime = setInterval(() => {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(distance % (1000 * 60) / 1000);

  const textString = `${days} days, ${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, and ${seconds} second${seconds === 1 ? '' : 's'}`;

  textContainer.innerHTML = `
	 <span class="text-indigo-700">${textString}</span>
	`;


  if (distance < 0) {
    clearInterval(updateTime);
    document.getElementById("counter").innerHTML = "This date is in the future 🔮";
  }
}, 1000);