package br.com.cayo.api.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.cayo.api.model.Cliente;
import br.com.cayo.api.repository.ClienteRepository;

@RestController
@CrossOrigin("http://localhost:4200")
public class ClienteResource {
	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping("/clientes")
	public List<Cliente> lista() {
		return this.clienteRepository.findAll();
	}
	
	@PostMapping("/clientes")
	public Cliente adiciona(@RequestBody @Valid Cliente cliente) {
		return this.clienteRepository.save(cliente);
	}
	
	@DeleteMapping("/clientes/{id}")
	public boolean deleta(@PathVariable("id") Long id) {
		this.clienteRepository.delete(id);
		return true;
	}
	
	@PutMapping("/clientes")
	public void edita(@RequestBody @Valid Cliente cliente) {
		this.clienteRepository.save(cliente);
	}
}
